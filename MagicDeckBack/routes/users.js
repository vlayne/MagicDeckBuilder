const express = require('express');
const mysql = require('mysql');
var router = express.Router();
const joi = require('joi');
const database = require('../service/database');
const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../resources/config.json');

settings = database.settings;

/*
 Register part 
*/
const requiredFields = joi.object().keys({
    email: joi.string().email().required(),
    username: joi.string().required(),
    passwords: joi.object().keys ({
    password: joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
    confirmPassword: joi.any().valid(joi.ref('password')).required()})
});

router.route('/sign-up').post(function (req, res, next) {
  try {
    const result = joi.validate(req.body, requiredFields);
    if (result.error) {
      res.status(500).json(result.error);
    } else {
    settings.query("SELECT * FROM user WHERE email = ?",result.value.email, function(errMail,resultMail){
        if(errMail) throw errMail ;
        if(resultMail && resultMail.length>0){
        return res.status(500).json('Un utilisateur est déjà inscrit avec cet email !');
        } else {

            const hash = hashPassword(result.value.passwords.password);

            delete result.value.passwords;
            result.value.password = hash;
    
            const user = result.value;
    
            settings.query("INSERT INTO user (email,username,password,role) VALUES ('" + user['email'] + "', '" 
            + user['username'] +"','"+user['password']+"', 3 ) ", function(err,resultat) {
                if(err) throw err;
                if(resultat) {
                    return  res.status(200).json('Inscription réussie vous allez être rediriger dans 5 secondes');
                } else {
                    return  res.status(500).json('Erreur lors de l\'inscription.');
                }
            });
        }
    });
    }
  } catch(error) {
    next(error)
  }
})

/*              *
 *              *
 * Login parts  *
 *              *
 */             
router.route('/sign-in').post( function (req,res) {
    settings.query("SELECT * FROM user WHERE username = ?",req.body.username, function(err,result){
        if(err){ throw (err)};
        const user = result[0];
        if(user && comparePassword(req.body.password,user.password)){
            const token = jwt.sign({sub: user.id}, config.secret, {expiresIn:"2h"});
            user.token = token;
            user.password = null;
            return  res.status(200).json(user);
        } else {
            return  res.status(500).json('Erreur de connection.');
        }
    } );
});

hashPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    console.log(password,salt);
    return  bcrypt.hashSync(password, salt);
}
comparePassword = function(password, encrypted){
    return bcrypt.compareSync(password, encrypted);
}

module.exports = router;