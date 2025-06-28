const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('present', 'absent', 'late'),
    allowNull: false,
  },
});

Attendance.associate = (models) => {
  Attendance.belongsTo(models.Student, { foreignKey: 'studentId' });
  Attendance.belongsTo(models.Course, { foreignKey: 'courseId' });
};

module.exports = Attendance;