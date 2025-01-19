const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.zebzeb = function(){
console.log(this.name + " сказал зэбзэб")
}
const valli = mongoose.model('valli', schema);
const hero = new valli({ name: 'Валли' });
hero.save().then(() => hero.zebzeb());