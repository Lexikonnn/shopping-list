import express, { Request, Response } from 'express';

const Express = require("express");
import { MongoClient } from 'mongodb';
const cors = require("cors");
const multer=require("multer");
const BodyParser = require('body-parser');

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(cors());

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




app.post("/write", async (request, response, next) => {
    console.log(request.body);
    // let result = await collection.insertOne(request.body);
    response.send(request.body);
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