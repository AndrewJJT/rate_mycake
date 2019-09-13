var controllers = require('./controllers');

module.exports = function(app){
    app.get('/cakes', controllers.getallcakes)
    app.get('/cakes/:id', controllers.getcake)
    app.post('/cakes', controllers.addcake)
    app.put('/cakes/:id', controllers.updatecake)
    app.delete('/cakes/:id', controllers.deletecake)
}