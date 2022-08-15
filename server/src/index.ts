import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: Number = 5000;

app.get('/', (req: Request, res: Response) =>{
    res.send("Sheeeesh")
})

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})