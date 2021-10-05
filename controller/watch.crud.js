"use strict";

const { WatchModel } = require("../model/watc.model");

const craeteFavWatch = async (req, res) => {
	const { id, title, description, toUSD, image_url } = req.body;
	const slug = title.toLowerCase().split(" ").join("-");

	WatchModel.find({ slug: slug }, (erroe, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newWachModel = new WatchModel({
				id: id,
				title: title,
				slug: slug,
				description: description,
				toUSD: toUSD,
				image_url: image_url,
			});

			newWachModel.save();
			res.send(newWachModel);
		}
	});
};

const getFavWatch = async (req, res) => {
	const data = await WatchModel.find({});
	res.send(getFavWatch);
};

const deleteFAvWatch = (req, res) => {
	const slug = req.params.slug;

	WatchModel.deleteOne({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			const data = await WatchModel.find({});
			res.send(data);
		}
	});
};

const updateFavWatch = async (req, res) => {
	const slug = req.params.slug;
	const updateData = req.body;

	WatchModel.findOne({ slug, slug }, (error, data) => {
		data.id = updateData.id;
		data.title = updateData.title;
		data.description = updateData.description;
		data.image_url = updateData.image_url;

		data.save;
	});

	setTimeout(async () => {
		const data = await WatchModel.find({});
		res.send(data);
	}, 500);
};

module.exports = {
	craeteFavWatch,
	getFavWatch,
	deleteFAvWatch,
	updateFavWatch,
};
