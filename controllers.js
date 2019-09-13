var Cake = require('./models');

var controllers = {
    getallcakes: function getallcakes(req,res){
        Cake.find()
        .then((data) => res.json({allcakes: data}))
        .catch(err => res.json(err))
    },

    getcake: function getcake(req,res){
        Cake.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },

    addcake: function addcake(req,res){
        Cake.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },

    updatecake: function updatecake(req,res){
        Cake.findByIdAndUpdate({_id:req.params.id}, {$push: {comments:req.body}})
        .then(data=> res.json(data))
        .catch(err=> res.json(err))
    },

    deletecake: function deletecake(req,res){
        Cake.findByIdAndDelete({_id:req.params.id})
        .then (data => req.json(data))
        .catch (err => req.json(err))
    }
    
}

module.exports = controllers;
