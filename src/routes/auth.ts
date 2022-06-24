import express from 'express';
import database from '..';
import { User } from '../interfaces/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express();

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) res.status(400).send('Every input field is required!');
        const user = await database.collection<User>('users').findOne({ username: username });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ username: username }, process.env['TOKEN_KEY'] == undefined ? '' : process.env['TOKEN_KEY'], { expiresIn: '2h' });
            res.status(200).json({ user: user, token: token });
        }
        else res.status(401).send('Invalid credentials!');
    } catch (err) {
        console.log(err);
    }
});

export default router;