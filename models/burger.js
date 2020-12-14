const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(result) {
            cb(result)
        });
    },

    update: function(objColsVals, condition, cb) {
        orm.updateOne("burgers", objColsVals, condition, (result) => {
            cb(result)
        });
    },

    delete: function(cb) {
        orm.deleteAll("burgers", (result) => {
            cb(result)
        });
    }
   
}

module.exports = burger;