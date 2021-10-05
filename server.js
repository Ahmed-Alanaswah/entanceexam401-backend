"use strict";
const express = require("express");

const cors = require("cors");
const { getData } = require("./controller/watch.controller");
const {
	craeteFavWatch,
	getFavWatch,
	deleteFAvWatch,
	updateFavWatch,
} = require("./controller/watch.crud");
// const axios = require('axios');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;
mongoose.connect(
	"mongodb+srv://Aa1791994:Aa1791994@cluster0.h4c2b.mongodb.net/watches?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,

		useUnifiedTopology: true,
	}
);

// mongoose.connect("mongodb://localhost:27017/Watches", {
// 	useNewUrlParser: true,

// 	useUnifiedTopology: true,
// });
app.listen(PORT, () => {
	console.log(`server start with port ${PORT}`);
});

app.get("/watch", getData);
app.post("/watch/favourite", craeteFavWatch);
app.get("/watch/favourite", getFavWatch);
app.delete("/watch/favourite/:slug", deleteFAvWatch);
app.put("/watch/favourite/:slug", updateFavWatch);
