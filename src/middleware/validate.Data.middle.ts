import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
const validateDataMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, resp: Response, next: NextFunction) => {
    const validadeData = schema.parse(req.body);
    req.body = validadeData;
    return next();
  };

export default validateDataMiddleware;
