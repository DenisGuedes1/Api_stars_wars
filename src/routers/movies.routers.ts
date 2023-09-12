import { Router } from "express";
import {
  createMoviesControllers,
  deletMoviesController,
  getAllMoviesController,
  updateMoviesController,
} from "../controllers/movies.Controllers";
import checkNameMiddleware from "../middleware/checkNameMiddleware";
import validateDataMiddleware from "../middleware/validate.Data.middle";
import verifyIdMiddleware from "../middleware/verifyIdExists.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schema/schemaMovies";

const moviesRouter: Router = Router();

moviesRouter.post(
  "",
  validateDataMiddleware(movieCreateSchema),
  checkNameMiddleware,
  createMoviesControllers
);
moviesRouter.get("", getAllMoviesController);
moviesRouter.delete("/:id", verifyIdMiddleware, deletMoviesController);
moviesRouter.patch(
  "/:id",
  validateDataMiddleware(movieUpdateSchema),
  verifyIdMiddleware,
  checkNameMiddleware,
  updateMoviesController
);
export default moviesRouter;
