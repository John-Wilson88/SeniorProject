module.exports = (sequelize, Sequelize) => {
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
            type: DataTypes.INTERGER,
            allowNull: false
        }
    });

    Workout.belongsTo(User, { foreignKey: 'userId' });
    Workout.hasOne(WorkoutType, { foreignKey: 'workoutTypeId' });
    Workout.hasOne(WorkoutCategory, { foreignKey: 'workoutCategoryId' });

    return Workout;
}