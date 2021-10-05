"use strict";

const superagent = require("superagent");

const getData = async (req, res) => {
	superagent
		.get(`https://watches-world.herokuapp.com/watches-list/`)
		.then((data) => {
			const responseData = data.body.map((watch) => {
				return watch;
			});

			res.send(responseData);
		});
};

module.exports = { getData };
