import express from "express";
import { News } from "../interfaces/News";
import database from '..';
import { ObjectId } from "mongodb";

const router = express();

router.get('/', async (req, res) => {
    const data = await database.collection<News>('news').find({}).toArray();
    res.status(200).json(data);
});

router.post('/', async (req, res) => {
    const data = await database.collection<News>('news').insertOne({ author: 'kecskécske6', content: req.body.content, imageURL: req.body.imageURL, publishedAt: new Date(), title: req.body.title, heading: req.body.heading });
    res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
    const data = await database.collection<News>('news').findOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json(data);
});

export default router;