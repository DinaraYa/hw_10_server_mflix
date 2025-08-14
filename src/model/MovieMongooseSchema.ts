import * as mongoose from "mongoose";

export const MovieMongooseSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: {type: String, required: true},
    genres: {type: [String], required: true},
    languages: {type: [String], required: true},
    imdb: {
        rating: {type: Number}
    },
    tomatoes: {
        viewer: {
            rating: {type: Number}
        },
    }
})

export const MovieMongooseModel = mongoose.model('Movie', MovieMongooseSchema, 'movies')