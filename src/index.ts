import express from "express";
import 'dotenv/config';
import route from "./routes/routes";

const app = express();
app.use(express.json());

app.use("/", route);
app.use("/api" , route);


app.listen(8888, () => {
    console.log(`Server on!`);
})
