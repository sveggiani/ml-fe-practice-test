import bodyParser from 'body-parser';
import express from 'express';

import apiRouter from './routes';

// Create API server instance
const port = 4000;
const app = express();

// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain, bodyParser.json());

apiRouter(app);

app.listen(port, () =>
  console.log(`Serving example API for MELI FE Test on port ${port}!`)
);
