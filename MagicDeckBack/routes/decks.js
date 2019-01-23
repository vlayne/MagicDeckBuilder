const express = require('express');
var router = express.Router();
const database = require('../service/database');

settings = database.settings;

router.route('/create/:id').post(async (req, res, next) => {
    const idUser = req.params.id;
    settings.query("INSERT INTO deck (id_user) VALUES ?", )

    return false;
});