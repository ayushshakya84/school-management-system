import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Corrected, flattened import paths
import LoginPage from './pages/Login'; 
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ManageStudents from './pages/ManageStudents';
import ManageTeachers from './pages/ManageTeachers';

import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto mt-8 p-4">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>} />
              <Route path="/admin/students" element={<PrivateRoute roles={['admin']}><ManageStudents /></PrivateRoute>} />
              <Route path="/admin/teachers" element={<PrivateRoute roles={['admin']}><ManageTeachers /></PrivateRoute>} />

              {/* Teacher Routes */}
              <Route path="/teacher/dashboard" element={<PrivateRoute roles={['teacher']}><TeacherDashboard /></PrivateRoute>} />
              
              {/* Student Routes */}
              <Route path="/student/dashboard" element={<PrivateRoute roles={['student']}><StudentDashboard /></PrivateRoute>} />
              
              <Route path="/" element={<LoginPage />} />
            </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
