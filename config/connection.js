import mysql from 'mysql';

const connection = mysql.createConnection({
    port: 3307,
    host: "localhost",
    user: "root",
    password: "root",
    database: "trackerDB",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  });
  
  // Connect to the database
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;