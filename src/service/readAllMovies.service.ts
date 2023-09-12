import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { MoviesAllReturn } from "../interface/interfaces";
const readAllService = async (
  page: number,
  perPage: number,
  sort: any | string,
  order: string | any
): Promise<MoviesAllReturn> => {
  const moviesRepository: Repository<Movie> =
    AppDataSource.getRepository(Movie);
  if (perPage < 0) {
    perPage = await moviesRepository.count();
  } else if (!perPage) {
    perPage = 5;
  }
  if (page < 1) page = 1;

  if (perPage > 5) perPage = 5;

  if (order != "ASC" && order != "DESC") order = "ASC";

  if (sort === "id") order = "ASC";

  const findMovies = await moviesRepository.find({
    skip: perPage * (page - 1),
    take: perPage,
    order: { [sort]: order },
  });
  const moviesCount: number = await moviesRepository.count();
  const moviesReturn: MoviesAllReturn = {
    prevPage:
      page - 1 < 1
        ? null
        : `http://localhost:3000/movies?page=${page - 1}&perPage=${
            perPage < 1 ? 5 : perPage
          }`,
    nextPage:
      page + 1 > Math.ceil(moviesCount / perPage) || page < 1
        ? null
        : `http://localhost:3000/movies?page=${page + 1}&perPage=${
            perPage < 1 ? 5 : perPage
          }`,
    count: moviesCount,
    data: findMovies.map((movie) => ({
      description: movie.description,
      duration: movie.duration,
      id: movie.id,
      name: movie.name,
      price: movie.price,
    })),
  };
  return moviesReturn;
};
export { readAllService };
