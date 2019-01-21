const express = require('express');
const mysql = require('mysql');
var router = express.Router();
const joi = require('joi');
const database = require('../database');
const cards = require('../models/user.model')
const bcrypt = require('bcrypt-nodejs');

settings = database.settings;

router.route('/cards/:color').get(async (req, res, next) => {
    settings.query('SELECT * FROM card WHERE color = ?', req.params.tagId, function(err,res,fields){
        if(err) throw err;
        if(res.body){
        return res.status(200).JSON(res.body);
        } else {
        return res.status(400).JSON(err);
        }
    });
});

router.route('/cards').get(async (req, res, next) => {
    settings.query('SELECT * FROM card', function(err,res,fields){
        if(err) throw err;
        if(res.body){
        return res.status(200).JSON(res.body);
        } else {
        return res.status(400).JSON(err);
        }
    });
});

module.exports = router;