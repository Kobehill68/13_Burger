const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result)
        })
    },

    insert: function(value, cb) {
        orm.insertOne("burgers", "burger_name", value, function(result) {
            cb(result)
        })
    },

    update: function(whereVal, cb) {
        orm.updateOne("burgers", "devoured", "1", "id", whereVal, function(result) {
            cb(result)
        })
    },

    clear: function(cb) {
        orm.deleteAll(function(result) {
            cb(result)
        })
    }

}

module.exports = burger;