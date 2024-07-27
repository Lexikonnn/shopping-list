import express, { Request, Response } from 'express';



const Express = require("express");
const Mongoclient=require("mongodb").MongoClient;
const cors = require("cors");
const multer=require("multer");

const app = express();
app.use(cors());



const CONNECTION_STRING = "mongodb+srv://admin:<hesloadmin>@cluster0.xqjtq96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const DATABASENAME = "shoppinglistdb";

app.listen(5038,() => {
  Mongoclient.connect(CONNECTION_STRING,(error: any,client : any) =>{
     const database=client.db(DATABASENAME);
     console.log("Mongo DB CONNECTION SUCCESS!")
  } )
})