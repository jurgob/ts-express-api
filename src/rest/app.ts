const express = require('express'); /* eslint @typescript-eslint/no-var-requires: "off" */
import { Request, Response } from 'express';
const app = express();

app.get('/ping', (req: Request, res: Response) => {
  res.json({
    up: true
  });
});

export default app;
