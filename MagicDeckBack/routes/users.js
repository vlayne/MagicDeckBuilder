const express = require('express');
const mysql = require('mysql');
var router = express.Router();
const joi = require('joi');
const database = require('../database');
const User = require('../models/user.model')
const bcrypt = require('bcrypt-nodejs');

settings = database.settings;

console.log('settings', settings);
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

router.route('/sign-up').post(async (req, res, next) => {
  try {
    const result = joi.validate(req.body, requiredFields);

    if (result.error) {
      return false;
    }

    // TODO : if email exist still doesn't return false (async issues);
    // emailExist = database.emailInDB(result.value.email);

    // console.log('test', database.emailInDB(result.value.email));

    const hash = hashPassword(result.value.password);

    delete result.value.passwords;
    result.value.password = hash;

    const user = result.value;

    settings.query("INSERT INTO user (email,username,password,role) VALUES ('" + user['email'] + "', '" + user['username'] +"' , '" + user['password']+"', 0 ) ", function(err,result,fields) {
        if(err) throw err;
        if(fields) {
            res.send("User created : " + fields);
        }
    });
    res.send(false);
    return true;

  } catch(error) {
    next(error)
  }
})

router.route('/sign-in').post(async (req,res,next) => {
        try{   
            settings.query("SELECT * FROM user WHERE username = '"+ req.body.username+"'", function(err,result,fields){
                if(err){ throw (err)};
                res.send(comparePassword(req.body.password,result[0]['password']));
            } );
        } catch(error) {
            console.log(error);
            res.send(false);
            return false
        }
});

router.post('/check_role/{roleId}', function(req,res){

});

hashPassword = function (password) {
    const salt =  bcrypt.genSaltSync(10);
    return  bcrypt.hashSync(password, salt);
}
comparePassword = function(password, encrypted){
    return bcrypt.compareSync(password, encrypted);
}

module.exports = router;