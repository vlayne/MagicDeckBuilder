// Change logs on prod

var mysql  = require('mysql');


exports.connect = function () { 
    connexion = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '27-rebirth-07'
    });
 return connexion;
}
