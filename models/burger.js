const orm = require("../config/orm");

const burger = {
    getAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    createBurger: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateBurger: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        })
    }
}

module.exports = burger;