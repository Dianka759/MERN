const Player = require("../models/player.model");

module.exports.allPlayers = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

module.exports.createPlayer = (request, response) => {
    const { name, position, game1, game2, game3 } = request.body;
    Player.create({
        name,
        position,
        status: {
            game1,
            game2,
            game3
        }
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

module.exports.updateStatus = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedPlayer => res.json({ user: updatedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

