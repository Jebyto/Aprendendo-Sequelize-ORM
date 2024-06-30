const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");

module.exports = {
    //
    async store(req, res){
        const { planetId } = req.params;
        const { name, serial_number } = req.body;

        const planet = await Planet.findByPk(planetId);

        if (!planet) {
            return res.status(400).json({ error: 'Planeta não encontrado' });
        }

        const satellite = await Satellite.create({
            name,
            serial_number,
            planetId
        });

        return res.json(satellite).status(201);
    },
    async index(req, res){
        const { planetId } = req.params;

        const planet = await Planet.findByPk(planetId,
            {include: Satellite }
        );

        if(!planet) {
            return res.status(400).json({ error: 'Planeta não encontrado' });
        }

        return res.json(planet);
    }
}