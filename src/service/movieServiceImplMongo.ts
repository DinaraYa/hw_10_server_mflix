import {MovieService} from "./MovieService.js";
import {Movie} from "../model/Movie.js";
import {MovieMongooseModel} from "../model/MovieMongooseSchema.js";
import {getMoviesByAwards, getMoviesByYearAndImdbRaring} from "../controllers/MovieControllers.js";



export class MovieServiceImplMongo implements MovieService {

    async getMoviesByLanguage(): Promise<Movie[]> {
        // const result = await MovieMongooseModel.find({
        //   languages: { $in: [ new RegExp(`^${language}$`, 'i') ] }
        // }).exec();
        const result = await MovieMongooseModel.find().where('languages').equals('Russian').exec();
        return Promise.resolve(result)
    }

    async getMoviesByGenre(): Promise<Movie[]> {
        const result = await MovieMongooseModel.find().where('genres').all(['Action', 'Comedy']).exec();
        return Promise.resolve(result);
    }

    async getMoviesRates(): Promise<Movie[]> {
        const result = await MovieMongooseModel.find({$expr: {$lt: ['$imdb.rating', '$tomatoes.viewer.rating' ]}}).exec()
        return Promise.resolve(result)
    }

    async getMoviesByYearAndImdbRaring(year: number): Promise<Movie[]> {
        const result = await MovieMongooseModel.aggregate([
            {$match: {year: year},},
            {$group: {'_id': '$imdb.rating', 'titles': {'$push': '$title'}}}
        ])
        return Promise.resolve(result)
    }

    async getMoviesByAwards(): Promise<Movie[]> {
        const movies = await MovieMongooseModel.find(
            { 'awards.wins': {$exists: true}}).sort({'awards.wins': -1}).select('title').limit(2)
        return Promise.resolve(movies)
    }


}

//***Get titles of two movies having maximal number of awards wins
//****Group by imdb rating of the movies released on 2010 year
// with specifying the titles for each rating value

export const MovieServiceMongo = new MovieServiceImplMongo();