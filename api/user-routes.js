import db from '../models/user.js';

module.exports = (app) => {
    app.get('/api/users', (req, res) => {
        db.User.findAll().then((results) => {
            res.json(results);
        })
    });

    app.post('api/users', (req, res) =>{
        db.User.create({
            fName: req.body.fName,
            lName: req.body.fName,
            addressNum: req.body.addressNum,
            street: req.boy.street,
            city: req.body.city,
            state: req.bodt.state,
            zipCode: req.body.zipCode,
            height: req.body.height,
            weight: req.body.weight,
            dateOfBirth: req.body.dateOfBirth,
            emailAddress: req.body.emailAddress
        }).then((results) => {
            console.log(results);
            res.end();
        });
    });
};