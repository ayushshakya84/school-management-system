const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Grade = sequelize.define('Grade', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  grade: {
    type: DataTypes.STRING(2), // e.g., A+, B, C-
    allowNull: false,
  },
  remarks: {
    type: DataTypes.STRING,
  },
});

Grade.associate = (models) => {
  Grade.belongsTo(models.Student, { foreignKey: 'studentId' });
  Grade.belongsTo(models.Course, { foreignKey: 'courseId' });
};

module.exports = Grade;