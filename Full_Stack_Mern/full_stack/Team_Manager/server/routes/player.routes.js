const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api/players/list', PlayerController.allPlayers);
    
    app.post('/api/players/addplayer', PlayerController.createPlayer);
    app.delete('/api/players/:id/delete', PlayerController.deletePlayer);
    
    app.get('/api/player/:id', PlayerController.getPlayer);
    app.put('/api/players/:id/update', PlayerController.updateStatus);
}
