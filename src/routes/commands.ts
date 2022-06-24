import express from "express";
import { Command } from "../interfaces/Command";
import database from '..';

const router = express();

router.get('/', async (req, res) => {
    const data = await database.collection<Command>('commands').find({}).toArray();
    res.status(200).json(data);
});

export default router;