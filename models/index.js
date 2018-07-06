"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var config    = require(__dirname + '/../config/config.json');
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);
var db        = {};

console.log(__dirname );

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.match('\\.js')=='.js' && (file !== "index.js"));
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });


db["Producto"].belongsTo(db["Unidad"]);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
