var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const URL = process.env.BACKEND_URL || 'http://localhost:4000/api';

app.get('/', async function (req, res) {
    try {
        let response = await fetch(URL); 
        response = await response.json();

        console.log(response);

        res.render('index', { data: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

app.listen(3000, function () {
    console.log('Server running on http://localhost:3000');
});