// Change logs on prod

var mysql  = require('mysql');

exports.settings = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        database : 'magicdeckbuilder'
});
