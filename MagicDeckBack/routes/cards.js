const express = require('express');
var router = express.Router();
const database = require('../database');
const cards = require('../models/user.model')

settings = database.settings;

router.route('/:color').get(async (req, res, next) => {
    console.log('req',req.params);
    settings.query('SELECT * FROM card WHERE color = ?', req.params.color, function(err,result,fields){
        if(err) throw err;
        console.log('res',res);
        if(result){
        return res.status(200).json(result);
        } else {
        return res.status(500).json(err);
        }
    });
});

router.route('/').get(async (req, res, next) => {
    settings.query('SELECT * FROM card', function(err,result,fields){
        if(err) throw err;
        if(result){
        return res.status(200).json(result);
        } else {
        return res.status(500).json(err);
        }
    });
});

module.exports = router;