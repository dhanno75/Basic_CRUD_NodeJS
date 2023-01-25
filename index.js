// const express = require("express");
import express from "express";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.route.js";
import usersRouter from "./routes/users.route.js";
import cors from "cors";
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

app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("Welcome 🙋‍♂️, 🌏 🎊✨");
});

// Movies
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };
