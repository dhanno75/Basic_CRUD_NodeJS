// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.route.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
// Top level await - if await is used outside of a function
await client.connect();
console.log("MongoDB is connected!!!");

app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨");
});

// Movies
app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };
