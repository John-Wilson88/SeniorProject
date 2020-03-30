import express from 'express';
import bodyParser from 'body-parser';
import db from './models';
import seeds from './seeders/seeds.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./api/user-routes.js")(app);

db.sequelize.sync({force: true}).then(() => {
	seeds(db.sequelize.queryInterface, db.Sequelize);
	app.listen(PORT, function(){
	    console.log(`Server running on ${PORT}`)
	})
});