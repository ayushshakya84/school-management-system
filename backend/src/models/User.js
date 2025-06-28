const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'teacher', 'student', 'parent'),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

User.prototype.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Define associations in a static method to prevent circular dependencies
User.associate = (models) => {
  User.hasOne(models.Student, { foreignKey: 'userId', onDelete: 'CASCADE' });
  User.hasOne(models.Teacher, { foreignKey: 'userId', onDelete: 'CASCADE' });
  User.belongsToMany(models.Student, { through: 'ParentStudent', as: 'Children', foreignKey: 'parentId' });
};

module.exports = User;