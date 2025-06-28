import React, { useState, useEffect } from 'react';
import api from 'api';

const ManageTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        api.get('/admin/teachers')
            .then(res => {
                setTeachers(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch teachers.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading teachers...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Manage Teachers</h1>
            {/* Table to display teachers would be here, similar to ManageStudents */}
        </div>
    );
};

export default ManageTeachers;