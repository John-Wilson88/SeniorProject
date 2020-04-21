import db from '../models';

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.workouts.findAll().then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        })
    });

    app.get('/api/exercises', (req, res) => {
        db.exercises.findAll().then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        })
    });

    // app.get('/api/workout-exercises', (req, res) => {
    //     db.WorkoutExercises.findAll().then((results) => {
    //         res.json(results);
    //     }).catch((err) => {
    //         console.log(err);
    //         res.json(err);
    //     })
    // });


    app.post('/api/workout', function(req, res) {
        db.workouts.create({
            workoutTitle: req.body.workoutTitle,
            type: req.body.type,
            category: req.body.category,
            intensity: req.body.intensity
        }).then((exercises) => {
            let exArr = [];
            
            for(let i = 0; i < req.body.exercises.length; i++) {
                let exObj = {
                    ex: req.body.exercises[i].ex,
                    reps: req.body.exercises[i].reps, 
                    sets: req.body.exercises[i].sets,
                    workoutId: exercises.dataValues.workoutId
                }
                exArr.push(exObj);
            }

            db.exercises.bulkCreate(exArr).then((Exercises) => {
                res.json(Exercises)
            }).catch((err) => {
                console.log(err);
                res.json(err);
            });

        });
    });

    app.post('/api/recordresult', function(req, res) {
        db.Result.create({
            workoutId: req.body.workoutId,
            difficulty: req.body.difficulty,
            comments: req.body.comments
        }).catch((err) => {
            console.log(err);
            res.json(err);
        })
    });

    app.get('/api/results', function(req, res) {
        db.Result.findAll().then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        })
    });

    // Need a GET route for a single user based off of their userId.

}