import express, { Request, Response } from 'express';
import List from './models/List';
import connectDB from './db';
const Express = require("express");
import { MongoClient } from 'mongodb';
const cors = require("cors");
const multer = require("multer");
const BodyParser = require('body-parser');

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(cors());
connectDB();
const client = new MongoClient('mongodb://root:root@localhost:27017/');

let collection: any;


app.get("/lists", async (req: Request, res: Response, next) => {
    try {
        if (!collection) throw new Error('Collection not initialized');
        const lists = await collection.find({}).toArray();
        res.json(lists);
    } catch (err) {
        next(err);
    }
});




app.post('/lists', async (req: Request, res: Response, next) => {
    try {
        console.log('Received POST request to /lists');
        console.log('Request body:', req.body);

        if (!req.body.name) {
            return res.status(400).json({ error: 'List name is required' });
        }

        const list = new List({
            name: req.body.name,
            completed: req.body.completed || false,
            products: req.body.products || []
        });

        const savedList = await list.save();
        console.log('List saved:', savedList);

        res.status(201).json(savedList);
    } catch (err) {
        console.error('Error saving list:', err);
        next(err);
    }
});



app.listen("3000", async () => {
    try {
        await client.connect();
        collection = client.db("shoppinglist").collection("lists");
        console.log("Listening at :3000...");
    } catch (e) {
        console.error(e);
    }
});