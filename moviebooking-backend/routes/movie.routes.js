const movie = require("express").Router();
const  {moviefun,moviefun2,moviefun3,moviefun4,moviefun5} = require("../controllers/movie.controller");


movie.get('/movies',moviefun)

movie.get('/movies?status=PUBLISHED ',moviefun2)

movie.get('/movies?status=RELEASED',moviefun3)

movie.get('/movies/{movieId}',moviefun4)

movie.get('/movies?status=RELEASED&title={title}&genres={genres}&artists={artists}&start_date={startdate}&end_date={enddate}',moviefun5)

module.exports= movie;
