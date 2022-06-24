import express from "express";
import { Page } from "../interfaces/Page";
import database from '..';

const router = express();

router.get('/', async (req, res) => {
    const data = await database.collection<Page>('pages').find({}).toArray();
    res.status(200).json(data);
});

router.get('/:title', async (req, res) => {
    const data = await database.collection<Page>('pages').findOne({ title: req.params.title });
    res.status(200).json(data);
});

router.get('/search/:title', async (req, res) => {
    const regexp = new RegExp(req.params.title, 'i');
    const data = await database.collection<Page>('pages').find({ title: regexp }).toArray();
    res.status(200).json(data);
});

export default router;