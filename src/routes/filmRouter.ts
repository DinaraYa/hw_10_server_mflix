import express from "express";
import * as controller from "../controllers/MovieControllers.js"

export const filmRouter = express.Router();


filmRouter.get('/rates', controller.getMoviesRates)
filmRouter.get('/genres', controller.getMoviesByGenre);
filmRouter.get('/language', controller.getMoviesByLanguage);
