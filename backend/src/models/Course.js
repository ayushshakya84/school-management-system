const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  courseCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Course.associate = (models) => {
  Course.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
  Course.belongsToMany(models.Student, { through: 'Enrollment' });
  Course.hasMany(models.Attendance, { foreignKey: 'courseId' });
  Course.hasMany(models.Grade, { foreignKey: 'courseId' });
  Course.hasMany(models.Timetable, { foreignKey: 'courseId' });
};

module.exports = Course;
