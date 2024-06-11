import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// configuration the .env file
dotenv.config();

// Create app Express
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


// Define the first Route with Express and TS
app.get("/", (req: Request, res: Response) => {
    res.send("Express con Typescript + Node js + Jest")
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
});






app.listen(port, () => console.log(`Server on: http://localhost:${port}`));
