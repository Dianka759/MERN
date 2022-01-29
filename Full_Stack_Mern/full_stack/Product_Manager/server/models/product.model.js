const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "title is required"],
			minlength: [3, "title must be at least 3 characters long"]
		},
		price: {
			type: mongoose.Types.Decimal128,
			required: [true, 'Price required.'],
			validate: {
				validator: v => {
					return v >= 1
				},
				message: 'Must be at least $1.00!'
			},
		},
		description: {
			type: String,
			required: [true, "description is required"],
			minlength: [3, "description must be at least 3 characters long"]
		}
	}, { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;