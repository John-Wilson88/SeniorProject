import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const Workout = sequelize.define('workouts', {
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
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intensity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Workout.associate = (models) => {
        Workout.hasMany(models.exercises, {foreignKey: 'workoutId', targetKey: 'workoutId'});
    };
    

    return Workout;
}