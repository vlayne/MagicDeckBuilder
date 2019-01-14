// Change logs on prod

var mysql  = require('mysql');


exports.connect = function () { 
    connexion = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '27rebirth07',
        database: "magicdeckbuilder"
    });
 return connexion;
}
