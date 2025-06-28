import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';

// Using absolute imports, which are configured in jsconfig.json
import LoginPage from 'pages/LoginPage';
import AdminDashboard from 'pages/admin/AdminDashboard';
import TeacherDashboard from 'pages/teacher/TeacherDashboard';
import StudentDashboard from 'pages/student/StudentDashboard';
import ManageStudents from 'pages/admin/ManageStudents';
import ManageTeachers from 'pages/admin/ManageTeachers';

import PrivateRoute from 'components/layout/PrivateRoute';
import Navbar from 'components/layout/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto mt-8 p-4">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />

              {/* Protected Routes using Outlet for nesting */}
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
      </Router>
    </AuthProvider>
  );
}

export default App;