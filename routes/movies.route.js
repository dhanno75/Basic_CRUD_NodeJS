import express from "express";
import {
  getAllMovies,
  getMoviebyId,
  addMovie,
  deleteMovie,
  updateMovie,
} from "../services/getAllMovies.js";

const router = express.Router();

router.get("/", async function (request, response) {
  const moviesList = await getAllMovies();
  response.send(moviesList);
});

router.get("/:id", async function (request, response) {
  let { id } = request.params;
  // let movie = movies.find((el) => el.id === request.params.id);
  const movie = await getMoviebyId(id);
  movie
    ? response.send(movie)
    : response.status(404).send("No such movie found");
});

router.post("/", async function (request, response) {
  const data = request.body;
  const movies = await addMovie(data);

  response.send(movies);
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  const result = await deleteMovie(id);
  result
    ? res.send({ message: "Movie was deleted successfully" })
    : res.status(404).send("Movie not found");
});

router.put("/:id", async (req, res) => {
  let id = req.params;
  const data = req.body;

  const result = await updateMovie(id, data);

  res.send(result);
});

export default router;
