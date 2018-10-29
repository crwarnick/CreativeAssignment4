var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

router.get('/', function(req, res) {
    res.sendFile('holiday.html', {root: 'public'});
});

router.get('/halloween', function(req, res) {
    var file = fs.readFileSync('routes/arrays.json');
    var json = JSON.parse(file);
    res.send(json);
})

module.exports = router;
