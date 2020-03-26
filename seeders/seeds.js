import Sequelize from 'sequelize';

 const seeds = function(queryInterface, Sequelize) {

    queryInterface.sequelize.models.users.create({
        fName: "this.state.fName",
        lName: "this.state.lName",
        addressNum: "this.state.addressNum",
        street: "this.state.street",
        city: "this.state.city",
        state: "this.state.state",
        zipCode: "this.state.zipCode",
        height: "this.state.height",
        weight: "this.state.weight",
        dateOfBirth: "this.state.dateOfBirth",
        emailAddress: "this.state.emailAddress"
    })
    
}

module.exports = seeds;