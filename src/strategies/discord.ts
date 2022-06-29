import passport from "passport";
import DiscordStrategy from 'passport-discord';
import database from '..';
import { User } from "../interfaces/User";
import 'dotenv/config';

passport.serializeUser((user: any, done) => {
    done(null, user.userId);
});

passport.deserializeUser(async (userId: string, done) => {
    try {
        const user = await database.collection<User>('users').findOne({ userId: userId });
        return user ? done(null, user) : done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

passport.use(new DiscordStrategy({
    clientID: process.env['ID'] == undefined ? '' : process.env['ID'],
    clientSecret: process.env['SECRET'] == undefined ? '' : process.env['SECRET'],
    callbackURL: '/api/auth/discord/redirect',
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    const { id, username, discriminator, avatar, guilds } = profile;
    let user = await database.collection<User>('users').findOne({ userId: id });
    if (!user) await database.collection<User>('users').insertOne({ avatar: avatar, guilds: guilds == undefined ? guilds : guilds?.filter(g => (g.permissions & 0x20) == 0x20), tag: `${username}#${discriminator}`, userId: id });
    else await database.collection<User>('users').updateOne({ userId: id }, { $set: { avatar: avatar, guilds: guilds == undefined ? guilds : guilds?.filter(g => (g.permissions & 0x20) == 0x20), tag: `${username}#${discriminator}` } });
    user = await database.collection<User>('users').findOne({ userId: id });
    return done(null, user ?? undefined);
}));