import Sequelize from 'sequelize';

 const seeds = function(queryInterface, Sequelize) {

    queryInterface.sequelize.models.user.create({
        fName: "this.state.fName",
        lName: "this.state.lName",
        addressNum: "123",
        street: "this.state.street",
        city: "this.state.city",
        state: "this.state.state",
        zipCode: "44236",
        height: "5",
        weight: "155",
        dateOfBirth: "2020-03-28",
        emailAddress: "thisstateemailAddress@email.com"
    })

    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Upper Body Burn',
    //     type: 'Strength',
    //     category: 'Split Workout',
    //     intensity: 7
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Lower Body Burn',
    //     type: 'Strength',
    //     category: 'Split Workout',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Core Focus',
    //     type: 'Strength',
    //     category: 'Split Workout',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Run + Core',
    //     type: 'Aerobic',
    //     category: 'Full Body Workout',
    //     intensity: 4
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'The All-Arounder',
    //     type: 'Strength',
    //     category: 'Full Body Workout',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.exercises.create({
    //     ex: 'push up',
    //     reps: '8',
    //     sets: '3',
    //     workoutId: 'cb226fb0-843b-11ea-9402-97e938d05bfe'
    // })
    // queryInterface.sequelize.models.exercises.create({
    //     ex: 'pull up',
    //     reps: '8',
    //     sets: '3',
    //     workoutId: 'cb226fb0-843b-11ea-9402-97e938d05bfe'
    // })
    // queryInterface.sequelize.models.exercises.create({
    //     ex: 'dips',
    //     reps: '8',
    //     sets: '3',
    //     workoutId: 'cb226fb0-843b-11ea-9402-97e938d05bfe'
    // })

}

module.exports = seeds;