const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const routes = require('./routes');
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
}

app.use(routes);

app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});
