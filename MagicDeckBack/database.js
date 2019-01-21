// Change logs on prod

var mysql  = require('mysql');

const settingsDB = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database: "magicdeckbuilder"
})

exports.settings = function (){
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        port: 3306,
        database: "magicdeckbuilder"
    })
};