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
        intensity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Workout.belongsTo(models.user, { foreignKey: 'userId' });
    // Workout.hasOne(models.WorkoutType, { foreignKey: 'workoutTypeId' });
    // Workout.hasOne(models.WorkoutCategory, { foreignKey: 'workoutCategoryId' });

    return Workout;
}