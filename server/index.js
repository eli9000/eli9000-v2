
import * as routes from './routes';

import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import { red } from 'chalk';

const app = express();

const {
  NODE_ENV,
  API_PORT = 3030,
  PORT = 3000,
} = process.env

app.use('*', cors({ origin: `http://localhost:${PORT}` }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });
}

app.get('/info', routes.info);
app.get('/social', routes.social);

app.listen(API_PORT, () => {
  console.log(red(`API is running on Port: ${API_PORT}`));
});

