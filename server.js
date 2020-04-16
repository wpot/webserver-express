const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.set('view engine', 'hbs');

//helpers

require('./hbs/helpers');

app.get('/', (req, res) => {
    // res.send('Hello World')
    // let salida = {
    //     nombre: 'omar',
    //     edad: 27,
    //     url: req.url
    // };
    res.render('home', {
        nombre: 'OMAR',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Omar',
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log('escuchando peticiones');
});