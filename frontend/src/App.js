import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Using all lowercase filenames for imports to prevent case-sensitivity issues.
import LoginPage from './pages/login'; 
import AdminDashboard from './pages/admindashboard';
import TeacherDashboard from './pages/teacherdashboard';
import StudentDashboard from './pages/studentdashboard';
import ManageStudents from './pages/managestudents';
import ManageTeachers from './pages/manageteachers';

import PrivateRoute from './components/privateroute';
import Navbar from './components/navbar';

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