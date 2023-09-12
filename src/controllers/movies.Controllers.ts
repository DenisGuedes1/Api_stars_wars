import { Request, Response } from "express";
import { Movies, MoviesAllReturn } from "../interface/interfaces";
import createMoviesService from "../service/createMovies.service";
import deleteMoviesService from "../service/deleteMovies.service";
import { readAllService } from "../service/readAllMovies.service";
import updateMoviesService from "../service/updateMovie.service";

const createMoviesControllers = async (req: Request, resp: Response) => {
  const userData: Movies = req.body;
  const newMovies = await createMoviesService(userData);
  return resp.status(201).json(newMovies);
};
const getAllMoviesController = async (req: Request, resp: Response) => {
  // let { page, perPage, sort, order } = req.query;
  let page = +req.query.page! || 1;
  let perPage = +req.query.perPage! || 5;
  let sort = req.query.sort || "id";
  let order = req.query.order || "ASC";
  order = order.toString().toUpperCase();
  const returnMovie: MoviesAllReturn = await readAllService(
    page,
    perPage,
    sort,
    order
  );

  return resp.json(returnMovie);
};
const deletMoviesController = async (req: Request, resp: Response) => {
  const idMovie = parseInt(req.params.id);
  await deleteMoviesService(idMovie);
  return resp.status(204).send();
};
const updateMoviesController = async (req: Request, resp: Response) => {
  const movieUp = await updateMoviesService(req.body, parseInt(req.params.id));

  return resp.status(200).json(movieUp);
};
export {
  createMoviesControllers,
  getAllMoviesController,
  deletMoviesController,
  updateMoviesController,
};
