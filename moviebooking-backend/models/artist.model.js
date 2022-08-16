const mongoose = require("mongoose");
const connection = require("../models/index");


const artist = new mongoose.Schema({
artistid:{
    type:Number,
    required:true,
    unique:true,    
},
first_name:{
    type:Number,
    required:true,   
},
last_name:{
    type:Number,
    required:true,  
},
wiki_url:{
    type:Number,
    required:true,   
},
profile_url:{
    type:Number,
    required:true,    
},
movies:[],

});

const Artist = new mongoose.model("Artist", artist)
module.exports = Artist;