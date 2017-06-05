var express = require('express');
var router = express.Router();
var db = require('../config/connection');

router.get('/', function(req, res, next) {
    db.Burger.findAll()
    .then(function(burgers) {
        res.render('index', {burgers});
    })
    .catch(function(error) {
        console.log(error);
    });
});

router.post('/addburger', function(req, res) {
    db.Burger.create(req.body)
    .then(function() {
        res.redirect('/');
    })
    .catch(function(error) {
        console.log(error);
    });
});

router.post('/devour', function(req, res) {
    db.Burger.update({
        devoured: true
    },{
        where: {
            id: req.body.id
        }
    })
    .then(function() {
        res.redirect('/');
    })
    .catch(function(error) {
        console.log(error);
    });
});

module.exports = router;
