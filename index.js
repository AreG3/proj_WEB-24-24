const express = require('express');
var bodyParser = require('body-parser')
const assert = require('assert')
const mongoose = require('./db/mongoose')
const Picture = require('./model/picture')
const Gallery = require('./model/gallery')
const Tag = require('./model/tag')
const Comment = require('./model/comment')
const User = require('./model/user')


//use connect method to connect to server


const port = 8000;
const app = express();

app.set('view engine','hbs');
app.use(bodyParser.json());

const userRoutes = require('./routes/users.js');
const pictureRoutes = require('./routes/pictures.js');
const galleryRoutes = require('./routes/galleries.js');


app.use('/users',userRoutes);
app.use('/pictures',pictureRoutes);
app.use('/galleries',galleryRoutes);

app.get('/',(req,res) => { 
    res.render('index',{
        Title: 'Galeria',
        Body: "Wzdęcia"
    })
});



app.get('/comments',(req,res) => { 
    res.send('Witaj w komentarzach')
});
app.listen(port);

