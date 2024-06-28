const express = require('express');
const PlanetController = require('../controller/PlanetController');

const routes = express.Router();

routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.index);
routes.get('/planets/:id', PlanetController.show);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

module.exports = routes;