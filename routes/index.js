var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

router.get('/', function(req, res) {
    res.sendFile('holiday.html', {root: 'public'});
});

var toDos = [];
var recipes = [];
var decors = [];
var activities = [];
var people = [];

router.get('/todo', function(req, res) {
        res.send(toDos);
});

router.post('/todo', function(req, res) {
    console.log(req.body);
    toDos.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/recipe', function(req, res) {
        res.send(recipes);
});

router.post('/recipe', function(req, res) {
    console.log(req.body);
    recipes.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/decor', function(req, res) {
        res.send(decors);
});

router.post('/decor', function(req, res) {
    console.log(req.body);
    decors.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/activity', function(req, res) {
        res.send(activities);
});

router.post('/activity', function(req, res) {
    console.log(req.body);
    activities.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/person', function(req, res) {
        res.send(people);
});

router.post('/person', function(req, res) {
    console.log(req.body);
    people.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
