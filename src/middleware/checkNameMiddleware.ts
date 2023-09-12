import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error/error";
import { tMovieReturn } from "../interface/interfaces";

export const checkNameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.name) {
    return next();
  }
  const { name } = req.body;

  const userRepository: Repository<tMovieReturn> =
    AppDataSource.getRepository(Movie);
  const existingMovie = await userRepository.findOne({ where: { name } });

  if (existingMovie) {
    throw new AppError("Movie already exists.", 409);
  }
  return next();
};
export default checkNameMiddleware;
