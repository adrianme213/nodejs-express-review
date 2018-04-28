const mysql = require('mysql');

// Create a database connection and export it from this file.

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'nodejsreview'
});

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) {
    throw error;
  }
  console.log('Connected: ', results[0].solution);
});

module.exports = connection;
