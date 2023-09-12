import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./error/error";
import moviesRouter from "./routers/movies.routers";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRouter);

app.use(handlreErrors);
export default app;
