import {MovieService} from "./MovieService.js";
import {Movie} from "../model/Movie.js";
import {MovieMongooseModel} from "../model/MovieMongooseSchema.js";



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
    // imdb rates less than tomatoes viewer rating

}

export const MovieServiceMongo = new MovieServiceImplMongo();