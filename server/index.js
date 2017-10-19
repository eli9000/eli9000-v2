
import * as routes from './routes';

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const {
  NODE_ENV,
  // MLAB_API,
  // MLAB_BASE_URL,
  // DATABASE,
  // DB_USER,
  // DB_PW
} = process.env

console.log('SERVER RUNNING!');

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });
}

// console.log(typeof routes.query);

app.get('/info', routes.info);
app.get('/social', routes.social);

app.listen(3030);

