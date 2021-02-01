const { Sequelize } = require('sequelize');
const { database } = require('../config/db.config')

const sequelize = new Sequelize(
    database.database, 
    database.username,
    database.password, {
        host: database.host, 
        port: database.port,
        dialect: 'mysql'
    }
   
);

module.exports  = sequelize;