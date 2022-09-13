import express from "express";
import { Request, Response } from "express";

const app = express();

app.get('/ads', (request: Request, response: Response) =>{
    return response.json([
        {id: 1, name: "Levi"},
        {id: 2, name: "Pedro"}
    ])
})

app.listen(3333)