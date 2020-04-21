import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const Result = sequelize.define('Result', {
        resultId:  {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        workoutId:  {
            type: DataTypes.UUID,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Result;
}