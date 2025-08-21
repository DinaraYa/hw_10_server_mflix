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

export const getMoviesByYearAndImdbRaring = async (req: Request, res: Response) => {
    const year = req.query.year;
    if(!year) res.status(400).end('Enter correct year');
    const movies = await service.getMoviesByYearAndImdbRaring(Number(year));
    res.status(200).json(movies);
}

export const getMoviesByAwards = async (req: Request, res: Response) => {
    const result = await service.getMoviesByAwards();
    res.status(200).json(result);
}


//***Get titles of two movies having maximal number of awards wins
//****Group by imdb rating of the movies released on 2010 year
// with specifying the titles for each rating value