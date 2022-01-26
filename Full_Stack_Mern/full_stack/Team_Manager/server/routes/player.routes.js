const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api/players/list', PlayerController.allPlayers);
    app.get('/api/player/:id', PlayerController.getPlayer);
    
    app.post('/api/players/addplayer', PlayerController.createPlayer);
    app.put('/api/players/:id/update', PlayerController.updateStatus);
    app.delete('/api/players/:id/delete', PlayerController.deletePlayer);
}
