import db from '../models';

module.exports = (app) => {
    app.get('/api/users', (req, res) => {
        db.user.findAll().then((results) => {
            res.json(results);
        })
    });

    app.post('/api/user', function(req, res) {
        db.user.create({
            fName: req.body.fName,
            lName: req.body.lName,
            addressNum: req.body.addressNum,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
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