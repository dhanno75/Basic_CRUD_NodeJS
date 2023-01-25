import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function updateMovie(id, data) {
  return await client
    .db("test")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function deleteMovie(id) {
  return await client
    .db("test")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
export async function addMovie(data) {
  return await client.db("test").collection("movies").insertMany(data);
}
export async function getMoviebyId(id) {
  return await client
    .db("test")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
export async function getAllMovies() {
  return await client.db("test").collection("movies").find({}).toArray();
}
