import express from "express";
import {PORT} from "./config/mflix_konfig.ts";
import {movieRouter} from "./routes/movieRouter.js";


export const launchServer =() => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server runs http://localhost:${PORT}`);

        app.use(express.json());

        app.use('/api', movieRouter);

        app.use((req, res) => {
            res.status(404).send('Page not Found');
        })

    })

}