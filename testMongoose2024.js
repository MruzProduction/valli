const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Valli = mongoose.model('Valli', { name: String });
const hero = new Valli({ name: 'Valli' });
hero.save().then(() => console.log('Зэбзэб')); 