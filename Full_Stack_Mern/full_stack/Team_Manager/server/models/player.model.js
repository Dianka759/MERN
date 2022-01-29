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
		},
		radio: {
			type: String,
			required: [true, "YUH or NUH required"]
		},
		checkbox: Boolean,
		counter: Number,
		like: Boolean,
		categories: {
			type: String,
			enum: ["Pick me!", "No! Pick me!!", "Guys we all know it's gonna be me."],
		}
	},
	{ timestamps: true }
);

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;