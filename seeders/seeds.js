import Sequelize from 'sequelize';

 const seeds = function(queryInterface, Sequelize) {

    queryInterface.sequelize.models.user.create({
        fName: "Jonh",
        lName: "Doe",
        addressNum: "123",
        street: "Aplabet",
        city: "City",
        state: "State",
        zipCode: "44236",
        height: "5",
        weight: "155",
        dateOfBirth: "2020-03-28",
        emailAddress: "thisIsAEmailAddress@email.com"
    })

    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Upper Body Burn',
        type: 'Strength',
        category: 'Split Workout',
        intensity: 7
    })
    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Run + Core',
        type: 'Aerobic',
        category: 'Full Body Workout',
        intensity: 4
    })
    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'The All-Arounder',
        type: 'Strength',
        category: 'Full Body Workout',
        intensity: 5
    })
    queryInterface.sequelize.models.exercises.create({
        ex: 'push up',
        reps: '8',
        sets: '3',
    })
    queryInterface.sequelize.models.exercises.create({
        ex: 'pull up',
        reps: '8',
        sets: '3',
    })
    queryInterface.sequelize.models.exercises.create({
        ex: 'dips',
        reps: '8',
        sets: '3',
    })

}

module.exports = seeds;