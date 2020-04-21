import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const Exercises = sequelize.define('exercises', {
        exercisesId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        ex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        workoutId: {
            type: DataTypes.UUID,
            // allowNull: false
        }
    });

    Exercises.associate = (models) => {
        Exercises.belongsTo(models.workouts);
    };
    
    return Exercises;
};