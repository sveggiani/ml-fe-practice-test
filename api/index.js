import bodyParser from 'body-parser';
import express from 'express';

import apiRouter from './routes';

// Create API server instance
const port = 4000;
const app = express();

app.use(bodyParser.json());
apiRouter(app);

app.listen(port, () =>
  console.log(`Serving example API for MELI FE Test on port ${port}!`)
);
