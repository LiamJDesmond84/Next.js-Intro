
import React from 'react'
import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;



        const client = await MongoClient.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.kz3wd.mongodb.net/nextjs-intro?authSource=admin&replicaSet=atlas-7wj273-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")

        console.log("Connect to MongoDB");

        const db = client.db();

        const meetupsCollection = db.collection("meetups");



        const results = await meetupsCollection.insertOne(data);
        console.log("Connect to MongoDB");
        console.log(results);

        client.close();

        // res.status(201).json({ message: "Meetup inserted...."});

    }
    res.json("hello")
}

export default handler
