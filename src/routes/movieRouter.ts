import express from "express";
import {filmRouter} from "./filmRouter.js";

export const movieRouter = express.Router();

movieRouter.use('/movie', filmRouter);