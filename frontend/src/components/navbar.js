import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    const getDashboardLink = () => {
        if (!user) return "/";
        return `/${user.role}/dashboard`;
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to={getDashboardLink()} className="flex-shrink-0 flex items-center font-bold text-xl text-indigo-600">
                           SchoolSys
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                             <div className="flex items-center space-x-4">
                               <span className="text-gray-700">Welcome, {user.firstName} ({user.role})</span>
                               <button onClick={logout} className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                                   Logout
                               </button>
                           </div>
                        ) : (
                            <Link to="/login" className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;