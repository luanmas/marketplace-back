import express from "express";
import router from "./routes/product";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

app.use("/api" , router);

app.listen(8888, () => {
    console.log("Server on");
})
