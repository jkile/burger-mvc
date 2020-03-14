const connection = ("./connection");

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
        let queryString = `UPDATE ${table} SET  WHERE ${condition}`;
        console.log(objColVals);
        // connection.query(queryString, (err, result) => {
        //     if (err) throw err;
        //     cb(results);
        // });
    }
}

module.exports = orm;