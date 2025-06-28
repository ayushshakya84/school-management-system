const { User, Student, Teacher, Course } = require('../models');
const { Op } = require('sequelize');

// Manage Students
const createStudent = async (req, res) => {
    const { email, password, firstName, lastName, admissionDate } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        const user = await User.create({ email, password, firstName, lastName, role: 'student' });
        const student = await Student.create({ userId: user.id, admissionDate });
        res.status(201).json({ user, student });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll({ include: { model: User, attributes: ['firstName', 'lastName', 'email'] } });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Manage Teachers
const createTeacher = async (req, res) => {
    const { email, password, firstName, lastName, specialization } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        const user = await User.create({ email, password, firstName, lastName, role: 'teacher' });
        const teacher = await Teacher.create({ userId: user.id, specialization });
        res.status(201).json({ user, teacher });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll({ include: { model: User, attributes: ['firstName', 'lastName', 'email'] } });
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


// Manage Courses
const createCourse = async (req, res) => {
    const { courseName, courseCode, description, teacherId } = req.body;
    try {
        const course = await Course.create({ courseName, courseCode, description, teacherId });
        res.status(201).json(course);
    } catch(error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll({ include: { model: Teacher, include: { model: User, attributes: ['firstName', 'lastName'] } } });
        res.json(courses);
    } catch(error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    createStudent,
    getStudents,
    createTeacher,
    getTeachers,
    createCourse,
    getCourses,
};
