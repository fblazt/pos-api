const express = require('express');
const Router = express.Router();
const menuController = require('../controllers/menu');
const cors = require('cors');
// const redisHelper = require('../helper/redis');

Router
  .get('/', menuController.getAllMenu)
  .post('/', menuController.insertMenu)
  .get('/:id', menuController.menuDetail);

module.exports = Router;