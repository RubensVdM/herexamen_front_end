const config = require('../config');
let characters = require('../characters');

const appRouter = (app) => {
    // GET ALL STUDENTS
    app.get('/characters', (req, res) => {
        console.log('Get all characters');

        if(characters && characters.length) {
            res.send({
                status: config.STATUS.OK,
                message: characters,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any student',
            });
        }
    });

    // GET STUDENT DETAILS
    app.get('/characters/:name', (req, res) => {
        let character = null;
        console.log('Get character', req.params.name);

        if(characters && characters.length) {
            character = characters.filter((character) => ('' + character.name) === req.params.name);
        }
        if(character) {
            res.send({
                status: config.STATUS.OK,
                message: character[0],
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any student',
            });
        }
    });

    app.put('/characters/:name', (req, res) => {
        let character = null;
        console.log('update character', req.body);

        if(characters && characters.length) {
            character = characters.filter((character) => ('' + character.name) === req.params.name);
        }

        if(character[0]) {
            // students[req.params.id] = req.body;
            characters = characters.map((s) => {
                return ('' + s.name) === req.params.name ? req.body : s;
            })

            res.send({
                status: config.STATUS.OK,
                message: req.body,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find student for update',
            });
        }


    });

    // ADD STUDENT
    app.post('/characters/add', (req, res) => {
        const maxIndex = Math.max.apply(Math,characters.map((o) => o.name));
        console.log('Add student', req.body, maxIndex);
        let character = req.body;
        character.id = maxIndex + 1;

        characters.push(character);

        if(characters[characters.length - 1] === character) {
            res.send({
                status: config.STATUS.OK,
                message: character,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not add student',
            });
        }
    });
}

module.exports = appRouter;
