import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const Exercises = sequelize.define('Exercises', {
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
        }
    });

    Exercises.associate = (models) => {
        Exercises.belongsToMany(models.Workout, {
            through: 'WorkoutExercises',
            as: 'workouts',
            foreignKey: 'exercisesId'
        });
    };
    
    return Exercises;
};