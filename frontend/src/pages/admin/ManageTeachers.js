import React, { useState, useEffect } from 'react';
import api from '../../api';

const ManageTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    // ... loading and error states

    useEffect(() => {
        api.get('/admin/teachers')
            .then(res => setTeachers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Manage Teachers</h1>
            {/* Table to display teachers */}
            {/* ... similar to ManageStudents */}
        </div>
    );
};

export default ManageTeachers;