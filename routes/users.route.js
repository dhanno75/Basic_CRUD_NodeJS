import express from "express";
import {
  getAllMovies,
  getMoviebyId,
  addMovie,
  deleteMovie,
  updateMovie,
} from "../services/getAllMovies.js";
import { createUser, getUserByName } from "../services/getAllUsers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

async function generateHashedPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

router.post("/signup", async function (request, response) {
  const { username, password } = request.body;

  const userFromDB = await getUserByName(username);
  console.log(userFromDB);

  if (userFromDB) {
    response.status(400).send({ message: "Username already exists" });
  } else if (password.length < 8) {
    response
      .status(400)
      .send({ message: "Password should be atleast 8 character long" });
  } else {
    const hashedPassword = await generateHashedPassword(password);
    const user = await createUser({
      username: username,
      password: hashedPassword,
    });

    response.send(user);
  }
});

router.post("/login", async function (request, response) {
  const { username, password } = request.body;

  const userFromDB = await getUserByName(username);
  console.log(userFromDB);

  if (!userFromDB) {
    response.status(401).send({ message: "Invalid login credentials" });
  } else {
    const storeDBPassword = userFromDB.password;
    const isPasswordCheck = await bcrypt.compare(password, storeDBPassword);

    console.log(isPasswordCheck);
    if (isPasswordCheck) {
      const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
      response.status(200).send({ messaage: "Successful login", token: token });
    } else {
      response.status(401).send({ message: "Invalid login credentials" });
    }
  }
});
export default router;
