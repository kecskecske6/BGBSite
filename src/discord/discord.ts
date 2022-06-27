import fetch from "node-fetch";
import 'dotenv/config';

const baseUrl: string = 'http://discord.com/api/v9';

export async function getGuilds(): Promise<unknown> {
    const response = await fetch(`${baseUrl}/users/@me/guilds`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${process.env['TOKEN']}`
        }
    });
    return response.json();
}