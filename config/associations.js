const Planet = require('../models/Planet');
const Satellite = require('../models/Satellite');

// Planet.hasOne(Satellite, {onDelete: "CASCADE", onUpdate: "CASCADE"});

Planet.hasMany(Satellite, {onDelete: "CASCADE", onUpdate: "CASCADE"});

Satellite.belongsTo(Planet, {onDelete: "CASCADE", onUpdate: "CASCADE"});

const Cap = require("../models/Captain");
const Spaceship = require("../models/Spaceship");

Cap.belongsToMany(Spaceship, {
  foreignKey: "capId",
  through: "captainSpaceship",
  as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
  foreignKey: "spaceshipId",
  through: "captainSpaceship",
  as: "captains",
});

module.exports = {
    Planet,
    Satellite,
};