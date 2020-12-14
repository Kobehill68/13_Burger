const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => { cb(res); });
    },

    insertOne: function(cols, values, cb) {
       
        console.log(this);
        orm.insertOne("burgers", cols, values, (res) => { cb(res) });
        
    },

    updateOne: function(objColValues, condition, cb) {
        
        orm.updateOne("burgers", objColValues, condition, (res) => { cb(res) });
        
    },

    
    deleteOne: function(condition, cb) {
        
        orm.deleteOne("burgers", condition, (res) => { cb(res); });
        
    },

}

module.exports = burger;