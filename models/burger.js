const orm = require("../config/orm");

const burger = {
    getAll(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    createBurger(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateBurger(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        })
    }
}