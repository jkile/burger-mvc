const connection = require("./connection");

const orm = {
    selectAll(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne(table, cols, vals, cb){
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?)`;

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne(table, objColVals,condition, cb){
        let queryString = `UPDATE ${table} SET devoured=${objColVals.devoured} WHERE ${condition}`;
        console.log(objColVals.devoured)
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;