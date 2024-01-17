import express from "express";
import dotenv from 'dotenv';
import route from "./routes/routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/", route);
app.use("/api" , route);

console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server on!`);
})
