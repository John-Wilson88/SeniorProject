import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import mysql from 'mysql';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

require("./api/user-routes.js")(app);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/hey', (req, res) => res.send('ho!'));

app.listen(PORT, () => {
    console.log("App running on PORT: " + PORT);
});