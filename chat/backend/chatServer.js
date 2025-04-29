const express = require('express');
const app = express();

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});
app.get('/get', function (req, res) {
    res.send('Hello get!');
});