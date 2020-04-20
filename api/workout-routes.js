import db from '../models';

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.findAll().then((results) => {
            res.json(results);
        })
    });

    app.get('/api/exercises', (req, res) => {
        db.Exercises.findAll().then((results) => {
            res.json(results);
        })
    });

    app.get('/api/workout-exercises', (req, res) => {
        db.WorkoutExercises.findAll().then((results) => {
            res.json(results);
        })
    });


    app.post('/api/workout', function(req, res) {
        db.Workout.create({
            workoutTitle: req.body.workoutTitle,
            type: req.body.type,
            category: req.body.category,
            intensity: req.body.intensity
        }).then((exercises) => {
            //console.log(exercises);
            //console.log(req.body.exercises);
            // let newExercises = [];

            // req.body.exercises.forEach(element => {
            //     let exObj = {
            //         exerciseTitle: req.body.exercises.ex,
            //         reps: req.body.exercises.reps,
            //         sets: req.body.exercises.sets
            //     };
            //     newExercises.push(exObj);
            // });

            db.Exercises.bulkCreate(req.body.exercises).then((Exercises) => {
                res.json(Exercises)
            }).catch((err) => {
                console.log(err);
                res.json(err);
            });

        });
    });

    // Need a GET route for a single user based off of their userId.

}