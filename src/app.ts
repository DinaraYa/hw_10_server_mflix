import * as mongoose from "mongoose"
import {MONGO_URI} from "./config/mflix_konfig.ts";
import {launchServer} from "./server.ts";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB successfully connected");
        launchServer();
    })
    .catch(() => {
        console.log("Something went wrong");
    })