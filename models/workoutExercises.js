import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const WorkoutExercises = sequelize.define('WorkoutExercises', {
        exercisesId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'exercises',
                key: 'exercisesId'
            }
        },
        workoutId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'workouts',
                key: 'workoutId'
            }
        }
    });
    
    return WorkoutExercises;
};