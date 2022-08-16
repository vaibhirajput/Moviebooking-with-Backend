const express = require("express");
const app = express();
const movie = require('./routes/movie.routes');
const artist = require('./routes/artist.routes');
const genre = require('./routes/genre.routes');
const cors = require("cors");
const user = require("./routes/user.routes");


const PORT = 9000;
app.use(movie);
app.use(genre);
app.use(artist);
app.use(user)
app.get('/', (req, res)=>{
    res.send("Welcome to Upgrad Movie booking application development.");
});


app.listen(PORT, ()=>{
    console.log("server is running on this PORT "+PORT);
})