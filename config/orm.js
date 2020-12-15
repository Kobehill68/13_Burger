const connection = require("../config/connection");

const orm = {
    selectAll(columns, tableName, cb) {
        connection.query("SELECT ?? FROM ??",[columns,tableName], (err, results) => {
          if (err) throw err;
          cb(results);
        });
    },
    insertOne(tableName, values, cb) {
        connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results) => {
          if (err) throw err;
          cb(results);
        });
    },
    updateOne(tableName, newValues, targetId, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, newValues, targetId], (err, results) => {
          if (err) throw err;
          cb(results);
        });
    }
};


module.exports = orm;