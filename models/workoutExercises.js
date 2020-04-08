import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const WorkoutExercises = sequelize.define('WorkoutExercises', {
        exercisesId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Exercises',
                key: 'exercisesId'
            }
        },
        workoutId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Workout',
                key: 'workoutId'
            }
        }
    });
    
    return WorkoutExercises;
};