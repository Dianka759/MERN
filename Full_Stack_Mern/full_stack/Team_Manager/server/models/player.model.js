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
			game1: { type: Number },
			game2: { type: Number },
			game3: { type: Number }
		}
	},
	{ timestamps: true }
);

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;