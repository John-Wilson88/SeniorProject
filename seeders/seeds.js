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
    
}

module.exports = seeds;