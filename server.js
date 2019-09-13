const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_mycakedb', {useNewUrlParser: true});

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());

require('./routes')(app);

app.listen(8000, ()=> console.log("listening on port 8000"))
