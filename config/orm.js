const connection = require("./connection.js");

const orm = {

  selectAll: function (table, cb) {
    const queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], (err, data) => {
      if (err) throw err;
      cb(data);
    })
  },


  insertOne: function (table, col, value, cb) {
    const queryString = `INSERT INTO ??(??) VALUES (?)`;
    connection.query(queryString, [table, col, value], (err, data) => {
      if (err) throw err;
      cb(data);
    })
  },


  updateOne: function (table, col, whereCol, whereVal, cb) {
    const queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
    connection.query(queryString, [table, col, value, whereCol, whereVal], (err, data) => {
      if (err) throw err;
      cb(data);
    })
  },


  deleteAll: function (cb) {
    const query = `DELETE FROM burgers`;
    connection.query(query, (err, data) => {
      if (err) throw err;
      cb(data);
    })
  }

};



module.exports = orm;