const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node-final",
    password: "Test@123"
})

module.exports = pool.promise()