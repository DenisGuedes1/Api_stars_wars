import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  movieCreateSchema,
  movieUpdateSchema,
  paginationMovie,
  returnMovie,
  returnMovies,
} from "../schema/schemaMovies";

type Movies = z.infer<typeof movieCreateSchema>;

type returnAllMovies = z.infer<typeof returnMovies>;
type MoviesUpdate = DeepPartial<typeof returnMovies>;
type TMoviesUpdate = z.infer<typeof movieUpdateSchema>;
type MoviesAllReturn = z.infer<typeof paginationMovie>;
type tMovieReturn = z.infer<typeof returnMovie>;

export {
  Movies,
  MoviesUpdate,
  MoviesAllReturn,
  returnAllMovies,
  tMovieReturn,
  TMoviesUpdate,
};
