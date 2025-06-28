import React, { useState, useEffect } from 'react';
import api from 'api';

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const { data } = await api.get('/admin/students');
                setStudents(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch students.');
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    if (loading) return <p>Loading students...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
            <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {students.length > 0 ? students.map((student) => (
                            <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{student.id}</td>
                                <td className="py-3 px-6 text-left">{`${student.User.firstName} ${student.User.lastName}`}</td>
                                <td className="py-3 px-6 text-left">{student.User.email}</td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">Edit</button>
                                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="4" className="text-center py-4">No students found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageStudents;