// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// import your .env file
require('dotenv').config();

// create connection to db, pass in MySQL info for username & pw with JAWSB for Heroku
let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;