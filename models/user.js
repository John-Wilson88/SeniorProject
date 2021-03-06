import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        userId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        fName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressNum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        emailAddress: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });

    return user;

};


