const connection = require('../config/config');

const menuModel = {
  getAllMenu: (search, sort = 'name', page, limit) => {
    return new Promise((resolve, reject) => {
      if (search) {
        connection.query('SELECT `menu`.*, `category`.`name_category` FROM `menu` JOIN `category` ON `menu`.`id_category` = `category`.`id_category` WHERE lower(`menu`.`name`) LIKE ?', [`%${search}%`], (err, result) => {
          if (err) {
            reject(new Error(err))
          }
            resolve(result)
        })
      } else {
        if (sort) {
          if (page || limit) {
            connection.query('SELECT `menu`.*, `category`.`name_category` FROM `menu` JOIN `category` ON `menu`.`id_category` = `category`.`id` ORDER BY `menu`.`' + sort + '` LIMIT ' + page + ',' + limit + '', (err, result) => {
              if(err || result.length < 1) {
                reject(new Error(err))
              }
              resolve(result)
            })
          }
          connection.query('SELECT * FROM menu', (err, result) => {
            if (err) {
              reject(new Error(err))
            }
              resolve(result)
          })
        }
      }
    })
  },
  menuDetail: (idMenu) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT menu.*, category.name_category FROM menu INNER JOIN category ON menu.id_category = category.id_category WHERE menu.id_menu = ?", idMenu, (err, result) => {
        if(err) {
          reject(new Error(err));
        }
        resolve(result);
      });
    });
  },
  insertMenu: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO menu SET ?", data, (err, result) => {
        if(err) {
          reject(new Error(err));
        }
        resolve(result);
      })
    })
  }
}

module.exports = menuModel;