import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const Workout = sequelize.define('Workout', {
        workoutId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        workoutTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intensity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Workout.associate = (models) => {
        Workout.belongsToMany(models.Exercises, {
            as: 'exercises',
            through: 'WorkoutExercises',
            foreignKey: 'workoutId'
        });
    };
    

    return Workout;
}