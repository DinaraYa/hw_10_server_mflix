import {Movie} from "../model/Movie.js";


export interface MovieService {
    getMoviesByGenre: () => Promise<Movie[]>;
    getMoviesByLanguage: () => Promise<Movie[]>;
    getMoviesRates: () => Promise<Movie[]>;
    getMoviesByYearAndImdbRaring:(year: number) => Promise<Movie[]>;
    getMoviesByAwards: () => Promise<Movie[]>;
}