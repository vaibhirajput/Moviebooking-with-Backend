const genre  = require("express").Router();
const genrefun = require("../controllers/genre.controller");


genre.get('/genre', genrefun )

module.exports= genre;
