const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "title is required"],
			minlength: [3, "title must be at least 3 characters long"]
		},
		price: {
			type: Number,
			required: [true, "price is required"],
			// min: [1, "price must be at least $1"]
		},
		description: {
			type: String,
			required: [true, "description is required"],
			minlength: [3, "description must be at least 3 characters long"]
		}
	},
	{ timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;