import { client } from "../index.js";

export async function createUser(data) {
  return await client.db("test").collection("users").insertOne(data);
}

export async function getUserByName(username) {
  return await client
    .db("test")
    .collection("users")
    .findOne({ username: username });
}
