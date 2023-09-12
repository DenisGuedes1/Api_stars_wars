import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { Movies } from "../interface/interfaces";
import { returnMovie } from "../schema/schemaMovies";

const createMoviesService = async (userData: Movies): Promise<Movies> => {
  const moviesRepository: Repository<Movie> =
    AppDataSource.getRepository(Movie);

  const movie: Movie = moviesRepository.create(userData);

  await moviesRepository.save(movie);

  const newMovie = returnMovie.parse(movie);

  return newMovie;
};
export default createMoviesService;
