var env = require("./env");
var Sequelize = require("sequelize");
var db = {};

var sequelize = new Sequelize (
env.DATABASE_NAME,
env.DATABASE_USERNAME,
env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    define: {
        underscored: true
    }
});

sequelize
.authenticate()
.then(function(error) {
    console.log('Connection has been established successfully.');
})
.catch(function (error) {
    console.log('Unable to connect to the database:', error);
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Burger = require("../models/burger")(sequelize, Sequelize);

module.exports = db;
