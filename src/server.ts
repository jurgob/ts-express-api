import express, { Express, Request, Response } from 'express';
const dotenv = require('dotenv');

dotenv.config();
let test = ""
const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});