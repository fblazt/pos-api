require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const route = require('./src/routers/index.js')
const cors = require('cors');
const logger = require('morgan');
const api = '/api/v1';

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(logger('dev'))
app.use(api, route);

// app.use(express.static(__dirname + '/'));

app.use('*', (req, res) => {
  res.send('404 Not Found!');
})

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});