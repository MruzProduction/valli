const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Valli = require('./models/valli.js').Valli
var valli = new Valli({
    title: "Валли",
    nick: "Valli",
    })
valli.save();