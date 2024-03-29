import { AppDataSource } from "./database/data-source";
import express from 'express';
import cors from 'cors';
import routes from "./routes";
import dotenv from "dotenv";

AppDataSource.initialize().then(async () => {
    console.log("Database logged");
    dotenv.config();
    const app = express();

    app.use(cors());
    app.use(express.json())
    app.use(routes);

    app.listen(process.env.PORT, () => {
        console.log(`server running ${process.env.PORT}`);
    })

}).catch(error => console.log(error))
