import {Request, Response} from "express";
import { MovieServiceMongo as service} from "../service/movieServiceImplMongo.js"

export const getMoviesByGenre = async (req: Request, res:Response) => {
    const result = await service.getMoviesByGenre();
    res.status(200).json(result);
}


export const getMoviesByLanguage= async (req: Request, res:Response) => {
    const result = await service.getMoviesByLanguage();
    res.status(200).json(result);
}

export const getMoviesRates = async (req: Request, res: Response) => {
    const result = await service.getMoviesRates();
    res.status(200).json(result);
}