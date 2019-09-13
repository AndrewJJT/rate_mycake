const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content:{type:String},
    stars: {type:Number}},
    {timestamps:true}
)

const CakeSchema = new mongoose.Schema({
    baker_name: {type:String},
    img_url:{type:String},
    comments:[CommentSchema]},
    {timestamps:true}
);

const Cake = mongoose.model('Cake', CakeSchema)

module.exports = Cake;