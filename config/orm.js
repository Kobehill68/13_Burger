const connection = require("../config/connection");



const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: (table, cols, values, cb) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ",";
        queryString += "devoured"
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "?"; //vals.toString();
        queryString += ",";
        queryString += "?";
        queryString += ") ";

        console.log(queryString);

        values.push("0"); // zero for false; can't have been devoured if it's new
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },

    updateOne(table, objColVals, condition, cb) {
        const queryString = `
        
            UPDATE ${table}
            SET ${objColVals.devourParm} = ?
            WHERE ${objColVals.idParm} = ? 
        
        `;

        connection.query(queryString, condition, (err, result) => {
            if (err) throw err;

            cb(result);
        });

    },

    delete(table, cb) {
        var queryString = `
        
                
        DELETE FROM
        ${table}
        WHERE devoured = 1
        `;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    }
};


module.exports = orm;