const CodingDojoController = require('../controllers/codingDojo.controller');

module.exports = function(app){

    app.get("/api/stacks", CodingDojoController.allStacks);

    app.post('/api/stacks/new', CodingDojoController.createStack);

    app.get("/api/stacks/chapters/:_id", CodingDojoController.oneChapter);
    app.get("/api/stacks/:_id", CodingDojoController.oneStack);

    app.put('/api/stacks/update/:id', CodingDojoController.updateStack);

    app.delete('/api/stacks/delete/:id', CodingDojoController.deleteStack);
    app.delete('/api/stacks/deleteAll', CodingDojoController.deleteAll);

}
