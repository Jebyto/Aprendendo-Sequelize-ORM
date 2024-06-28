const Planet = require('../models/Planet');

module.exports = {

    async store(req, res) {
        const { name, position } = req.body;

        const planet = await Planet.create({
            name,
            position
        });

        return res.json(planet);
    },

    async index(req, res) {
        const planets = await Planet.findAll();
        return res.json(planets);
    },

    async show(req, res) {
        const planets = await Planet.findByPk(req.params.id);
        return res.json(planets);
    },

    async put(req, res) {
        const { name, size, position } = req.body;
        const { id } = req.params;

        await Planet.update(
            { name, size, position },
            {
                where: {
                    id: id,
                },
            }
        );
        return res.send("Planet update with success");
    },

    async delete(req, res) {
        await Planet.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.send("Success! Planet excluded.");
    },

}