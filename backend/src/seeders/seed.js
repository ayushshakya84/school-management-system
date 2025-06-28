const sequelize = require('../config/database');
const { User, Student, Teacher, Course, Enrollment } = require('../models');

const seedDatabase = async () => {
  try {
    // Drop all tables and recreate them
    await sequelize.sync({ force: true });
    console.log('Database synced!');

    // Create Admin
    const adminUser = await User.create({
      email: 'admin@school.com',
      password: 'password123',
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin',
    });
    console.log('Admin user created');

    // Create Teacher
    const teacher1User = await User.create({
      email: 'teacher1@school.com',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      role: 'teacher',
    });
    const teacher1 = await Teacher.create({ userId: teacher1User.id, specialization: 'Mathematics' });
    console.log('Teacher 1 created');
    
    // Create Student
    const student1User = await User.create({
      email: 'student1@school.com',
      password: 'password123',
      firstName: 'Alice',
      lastName: 'Smith',
      role: 'student',
    });
    const student1 = await Student.create({ userId: student1User.id });
    console.log('Student 1 created');
    
    const student2User = await User.create({
      email: 'student2@school.com',
      password: 'password123',
      firstName: 'Bob',
      lastName: 'Johnson',
      role: 'student',
    });
    const student2 = await Student.create({ userId: student2User.id });
    console.log('Student 2 created');
    
    // Create Courses
    const mathCourse = await Course.create({
        courseName: 'Algebra 101',
        courseCode: 'MATH101',
        description: 'Introduction to Algebra.',
        teacherId: teacher1.id
    });
    console.log('Math course created');

    const scienceCourse = await Course.create({
        courseName: 'Physics 101',
        courseCode: 'PHY101',
        description: 'Introduction to Physics.'
        // No teacher assigned yet
    });
    console.log('Science course created');

    // Enroll students in courses
    await student1.addCourse(mathCourse);
    await student1.addCourse(scienceCourse);
    await student2.addCourse(mathCourse);
    console.log('Students enrolled in courses');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // sequelize.close(); // Don't close connection as server will use it
  }
};

module.exports = seedDatabase;