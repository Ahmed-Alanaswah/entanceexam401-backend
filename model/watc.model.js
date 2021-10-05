"use strict";

const mongoose = require("mongoose");

const watchSchema = mongoose.Schema({
	id: Number,
	title: String,
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
	description: String,
	toUSD: String,
	image_url: String,
});

const WatchModel = mongoose.model("watch", watchSchema);

module.exports = { WatchModel };
