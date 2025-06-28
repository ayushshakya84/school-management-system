const User = require('./User');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Course = require('./Course');
const Attendance = require('./Attendance');
const Grade = require('./Grade');
const Timetable = require('./Timetable');

// User -> Student/Teacher one-to-one
User.hasOne(Student, { foreignKey: 'userId', onDelete: 'CASCADE' });
Student.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Teacher, { foreignKey: 'userId', onDelete: 'CASCADE' });
Teacher.belongsTo(User, { foreignKey: 'userId' });

// Teacher -> Course one-to-many
Teacher.hasMany(Course, { foreignKey: 'teacherId' });
Course.belongsTo(Teacher, { foreignKey: 'teacherId' });

// Student <-> Course many-to-many through a join table 'Enrollments'
const Enrollment = require('../config/database').define('Enrollment', {});
Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

// Student -> Attendance one-to-many
Student.hasMany(Attendance, { foreignKey: 'studentId' });
Attendance.belongsTo(Student, { foreignKey: 'studentId' });

// Course -> Attendance one-to-many
Course.hasMany(Attendance, { foreignKey: 'courseId' });
Attendance.belongsTo(Course, { foreignKey: 'courseId' });

// Student -> Grade one-to-many
Student.hasMany(Grade, { foreignKey: 'studentId' });
Grade.belongsTo(Student, { foreignKey: 'studentId' });

// Course -> Grade one-to-many
Course.hasMany(Grade, { foreignKey: 'courseId' });
Grade.belongsTo(Course, { foreignKey: 'courseId' });

// Course -> Timetable one-to-many
Course.hasMany(Timetable, { foreignKey: 'courseId' });
Timetable.belongsTo(Course, { foreignKey: 'courseId' });

// Parent-Student Relationship (Many-to-Many)
// A user with role 'parent' can be linked to multiple students
const ParentStudent = require('../config/database').define('ParentStudent', {});
User.belongsToMany(Student, { through: ParentStudent, as: 'Children', foreignKey: 'parentId' });
Student.belongsToMany(User, { through: ParentStudent, as: 'Parents', foreignKey: 'studentId' });


module.exports = {
  User,
  Student,
  Teacher,
  Course,
  Attendance,
  Grade,
  Timetable,
  Enrollment,
  ParentStudent
};

