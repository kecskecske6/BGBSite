import express from 'express';
import { getGuilds } from '../discord/discord';

const router = express();

router.get('/guilds', async (req, res) => {
    const guilds = await getGuilds();
    res.send(guilds);
});

export default router;