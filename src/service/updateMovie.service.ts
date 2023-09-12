import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { tMovieReturn } from "../interface/interfaces";
import { returnMovie } from "../schema/schemaMovies";
const updateMoviesService = async (
  movieData: Movie,
  idMovie: number
): Promise<tMovieReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const oldMoviesData = await movieRepository.findOneBy({
    id: idMovie,
  });
  const movieNew = movieRepository.create({
    ...oldMoviesData,
    ...movieData,
  });

  await movieRepository.save(movieNew);
  const movieUp = returnMovie.parse(movieNew);
  return movieUp;
};

export default updateMoviesService;
