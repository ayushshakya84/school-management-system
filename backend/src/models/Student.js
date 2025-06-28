const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  admissionDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Student.associate = (models) => {
  Student.belongsTo(models.User, { foreignKey: 'userId' });
  Student.belongsToMany(models.Course, { through: 'Enrollment' });
  Student.belongsToMany(models.User, { through: 'ParentStudent', as: 'Parents', foreignKey: 'studentId' });
  Student.hasMany(models.Attendance, { foreignKey: 'studentId' });
  Student.hasMany(models.Grade, { foreignKey: 'studentId' });
};

module.exports = Student;