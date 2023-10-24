"use strict";

require('dotenv').config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

// Models
const cliente = require("./cliente");
const unidad = require("./unidad");
const producto = require("./producto");

// DB connection
const PGHOST = process.env.PGHOST || '127.0.0.1'
const PGDATABASE = process.env.PGDATABASE || 'carrito'
const PGUSER = process.env.PGUSER || 'pedro'
const PGPASSWORD = process.env.PGPASSWORD || 'secret'
const PGURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`

var sequelize = new Sequelize(PGURL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});
var db = {
    Cliente: cliente(sequelize, Sequelize.DataTypes),
    Unidad: unidad(sequelize, Sequelize.DataTypes),
    Producto: producto(sequelize, Sequelize.DataTypes)
};
db["Producto"].belongsTo(db["Unidad"]);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
