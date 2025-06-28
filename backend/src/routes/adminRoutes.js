const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { 
    createStudent, getStudents, 
    createTeacher, getTeachers,
    createCourse, getCourses,
} = require('../controllers/adminController');

// All routes in this file are protected and restricted to 'admin'
router.use(protect, authorize('admin'));

router.route('/students').post(createStudent).get(getStudents);
router.route('/teachers').post(createTeacher).get(getTeachers);
router.route('/courses').post(createCourse).get(getCourses);

module.exports = router;