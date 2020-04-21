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

    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Tester',
        type: 'Full Test',
        category: 'Upper Test',
        intensity: 5
    })
    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Tester2',
        type: 'Full Test2',
        category: 'Upper Test2',
        intensity: 8
    })
    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Tester3',
        type: 'Full Test3',
        category: 'Upper Test3',
        intensity: 10
    })
    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Tester',
        type: 'Full Test',
        category: 'Upper Test',
        intensity: 5
    })
    queryInterface.sequelize.models.workouts.create({
        workoutTitle: 'Tester2',
        type: 'Full Test2',
        category: 'Upper Test2',
        intensity: 8
    })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester',
    //     type: 'Full Test',
    //     category: 'Upper Test',
    //     intensity: 5
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester2',
    //     type: 'Full Test2',
    //     category: 'Upper Test2',
    //     intensity: 8
    // })
    // queryInterface.sequelize.models.workouts.create({
    //     workoutTitle: 'Tester3',
    //     type: 'Full Test3',
    //     category: 'Upper Test3',
    //     intensity: 10
    // })

}

module.exports = seeds;