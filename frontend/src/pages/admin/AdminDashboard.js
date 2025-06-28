import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/admin/students" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold">Manage Students</h2>
                    <p className="text-gray-600 mt-2">Add, view, and edit student information.</p>
                </Link>
                 <Link to="/admin/teachers" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold">Manage Teachers</h2>
                    <p className="text-gray-600 mt-2">Add, view, and edit teacher information.</p>
                </Link>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Manage Courses</h2>
                    <p className="text-gray-600 mt-2">Create and assign courses.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Timetables</h2>
                    <p className="text-gray-600 mt-2">Manage class schedules.</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">System Reports</h2>
                    <p className="text-gray-600 mt-2">View overall school statistics.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;