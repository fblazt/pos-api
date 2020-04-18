require('dotenv').config();
const menuModel = require('../model/menu');
const MiscHelper = require('../helper/helper');
const connection = require('../config/config');
// const redis = require('redis');
// const client = redis.createClient(process.env.REDIS_PORT);

const menuController = {
  getAllMenu: (req, res) => {
    // connection.query('SELECT count(*) AS total from `menu`', (err, result) => {
    //   const totalPage = result[0].total;
    //   const {search, sort = 'name', page = 1, limit = 8} = req.query;
    //   const startPage = (page - 1) * limit;
    //   const lastPage = limit;
    //   const pages = [];
    //   for(let index = 0;index < totalPage / limit;index++) {
    //     pages.push(index + 1);
    //   }
    //   menuModel.getAllMenu(search, sort, startPage, lastPage)
    //     .then(result => {
    //       // client.setex('getAllMenu', 3600, JSON.stringify(result))
    //       MiscHelper.pagination(res, result, 200, 'http://localhost:3000/api/v1/menu', totalPage, page, pages, startPage, lastPage);
    //     })
    //     .catch(err => {
    //       MiscHelper.response(res, err, 404, 'Menu not found!');
    //     });
    // });
    const search = req.query.search;
    const sort = req.query.sort;
    const seq = req.query.seq;
    const page = req.query.page;
    console.log(req.query);
    menuModel.getAllMenu(search, sort, seq, page)
      .then((result) => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        MiscHelper.response(res, err, 404);
      });
  },
  menuDetail: (req, res) => {
    const idMenu = req.params.id_menu;
    menuModel.menuDetail(idMenu)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        MiscHelper.response(res, err, 404);
      });
  },
  insertMenu: (req, res) => {
    const {name, image, price, id_category} = req.body;
    const data = {
      name,
      image,
      price,
      id_category,
      created_at: new Date(),
    };
    console.log(data)
    menuModel.insertMenu(data)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        MiscHelper.response(res, err, 500);
      })
  },
};

module.exports = menuController;