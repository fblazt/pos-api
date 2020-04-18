const express = require('express');
const menu = require('./menu');

const Router = express.Router();
Router
  .use('/menu', menu);

module.exports = Router;