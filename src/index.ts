import express from 'express';
import { AddressInfo } from 'net';
import { Db, MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import routes from './routes';
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(bodyParser.json());

const client = new MongoClient(process.env['MONGO_URL'] == undefined ? '' : process.env['MONGO_URL']);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env['FRONTEND'] == undefined ? '' : process.env['FRONTEND']);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

client.connect((error, clientdb) => {
    const server = app.listen(process.env.PORT, () => {
        const port = (server.address() as AddressInfo).port;
        console.log(`The app is running on port ${port}`);
    });
});

app.use(express.static(path.join(__dirname, '../frontend/dist/bgbsite-frontend')));

app.use('/api', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/dist/bgbsite-frontend/index.html'));
});

const database: Db = new Db(client, 'website-data');

export default database;