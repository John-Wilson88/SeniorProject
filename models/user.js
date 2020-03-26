//import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        // userId: {
        //     type: DataTypes.UUID,
        //     defaultValue: Sequelize.UUIDV1,
        //     primaryKey: true,
        //     allowNull: false
        // },
        fName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        addressNum: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zipCode: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        height: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        weight: {
            type:Sequelize.INTEGER,
            allowNull: false
        },
        dateOfBirth: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        emailAddress: {
            type:Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });

    return user;

};