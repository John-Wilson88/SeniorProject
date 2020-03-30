import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const WorkoutType = sequelize.define('WorkoutType', {
        workoutTypeId:  {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        typeTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeDescription: {
            type: DataTypes.TEXT
        }
    });

   // WorkoutType.belongsToMany(Workout);

    return WorkoutType;
}