const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			minlength: [2, "Name must be at least 2 characters long"]
		},
		position: String,
		status: {
			game1: Number,
			game2: Number,
			game3: Number
		}
	},
	{ timestamps: true }
);

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;