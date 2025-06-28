import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';

import LoginPage from 'pages/LoginPage';
import AdminDashboard from 'pages/admin/AdminDashboard';
import TeacherDashboard from 'pages/teacher/TeacherDashboard';
import StudentDashboard from 'pages/student/StudentDashboard';
import ManageStudents from 'pages/admin/ManageStudents';
import ManageTeachers from 'pages/admin/ManageTeachers';

import PrivateRoute from 'components/layout/PrivateRoute';
import Navbar from 'components/layout/Navbar';

// This is the correct component hierarchy.
// Router must be the top-level parent.
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container mx-auto mt-8 p-4">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />

              <Route element={<PrivateRoute roles={['admin']} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/students" element={<ManageStudents />} />
                <Route path="/admin/teachers" element={<ManageTeachers />} />
              </Route>

               <Route element={<PrivateRoute roles={['teacher']} />}>
                <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
              </Route>

              <Route element={<PrivateRoute roles={['student']} />}>
                <Route path="/student/dashboard" element={<StudentDashboard />} />
              </Route>

            </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;