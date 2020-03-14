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
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (??)`;

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(results);
        })
    },

    updateOne(table, objColVals,condition, cb){
        let key = objColVals;
        let queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition}`;
        console.log(key);
        // connection.query(queryString, (err, result) => {
        //     if (err) throw err;
        //     cb(results);
        // });
    }
}

module.exports = orm;