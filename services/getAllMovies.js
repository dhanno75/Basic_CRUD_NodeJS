import { client } from "../index.js";

export async function updateMovie(id, data) {
  return await client
    .db("test")
    .collection("movies")
    .updateOne(id, { $set: data });
}
export async function deleteMovie(id) {
  return await client.db("test").collection("movies").deleteOne({ id });
}
export async function addMovie(data) {
  return await client.db("test").collection("movies").insertMany(data);
}
export async function getMoviebyId(id) {
  return await client.db("test").collection("movies").findOne({ id });
}
export async function getAllMovies() {
  return await client.db("test").collection("movies").find({}).toArray();
}
