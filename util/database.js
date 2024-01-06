const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("node-final", "root", "Test@123", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize