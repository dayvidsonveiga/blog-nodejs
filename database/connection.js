const Sequelize = require('sequelize');

const connection = new Sequelize('db_blog', 'root', '258258', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
} );

module.exports = connection;