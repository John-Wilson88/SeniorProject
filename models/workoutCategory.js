import { DataTypes } from 'sequelize'; // Import the built-in data types

export default (sequelize, Sequelize) => {
    const WorkoutCategory = sequelize.define('WorkoutCategory', {
        workoutCategoryId:  {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        categoryTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryDescription: {
            type: DataTypes.TEXT
        }
    });

    //WorkoutCategory.belongsToMany(Workout);

    return WorkoutCategory;
}