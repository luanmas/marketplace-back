import express from "express";
import dotenv from 'dotenv';
import route from "./routes/routes";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/", route);
app.use("/api" , route);

console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server on!`);
})
