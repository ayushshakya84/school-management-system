const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  hireDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  specialization: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Teacher.associate = (models) => {
  Teacher.belongsTo(models.User, { foreignKey: 'userId' });
  Teacher.hasMany(models.Course, { foreignKey: 'teacherId' });
};

module.exports = Teacher;