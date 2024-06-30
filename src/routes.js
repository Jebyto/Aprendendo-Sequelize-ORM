const express = require('express');
const PlanetController = require('../controller/PlanetController');
const SatelliteController = require('../controller/SatelliteController');
const CapController = require("../controller/CaptainController");
const SpaceshipController = require("../controller/SpaceshipController");

const routes = express.Router();

routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.index);
routes.get('/planets/:id', PlanetController.show);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post('/planet/:planetId/satellites', SatelliteController.store);
routes.get('/planet/:planetId/satellites', SatelliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;