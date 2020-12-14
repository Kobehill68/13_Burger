const connection = require("./connection");

function printQuestionsMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        connection.query(`SELECT * FROM ${tableInput};`, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: (table, column, values, cb) => {
        let queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (${printQuestionsMarks(values.length)})`;

        console.log(queryString);

        connection.query(queryString, values, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    },

    updateOne:(table, objColValues, condition, cb) => {
        let qs = `UPDATE ${table} SET ${objToSql(objColValues)} WHERE ${condition}`;
    
        console.log(qs);
    
        connection.query(qs, (err, result) => {
          if (err) { throw err; }
          cb(result);
        });
    },

    deleteOne: (table, condition, cb) => {
        let queryString = `DELETE FROM ${table} WHERE ${condition}`;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result)
        })
    }
};


module.exports = orm;