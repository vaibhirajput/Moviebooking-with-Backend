const artist  = require("express").Router();
const artistfun = require("../controllers/artist.controller");


artist.get('/artist', artistfun )

module.exports= artist;
