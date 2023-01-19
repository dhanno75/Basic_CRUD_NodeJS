// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
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

app.get("/movies", async function (request, response) {
  const moviesList = await client
    .db("test")
    .collection("movies")
    .find({})
    .toArray();
  response.send(moviesList);
});

app.get("/movies/:id", async function (request, response) {
  let { id } = request.params;
  // let movie = movies.find((el) => el.id === request.params.id);
  const movie = await client.db("test").collection("movies").findOne({ id });
  movie
    ? response.send(movie)
    : response.status(404).send("No such movie found");
});

app.post("/movies", async function (request, response) {
  const data = request.body;
  const movies = await client.db("test").collection("movies").insertMany(data);

  response.send(movies);
});

app.delete("/movies/:id", async (req, res) => {
  let { id } = req.params;

  const result = await client.db("test").collection("movies").deleteOne({ id });
  result
    ? res.send({ message: "Movie was deleted successfully" })
    : res.status(404).send("Movie not found");
});

app.put("/movies/:id", async (req, res) => {
  let id = req.params;
  const data = req.body;

  const result = await client
    .db("test")
    .collection("movies")
    .updateOne(id, { $set: data });

  res.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
