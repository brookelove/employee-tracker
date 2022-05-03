const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database:'incorperated_db'
    }
);

connection.connect(function(err) {
   if (err) throw err;

   console.log('Connected to db')
});

module.exports = connection;