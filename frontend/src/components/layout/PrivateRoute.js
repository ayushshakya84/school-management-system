import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const PrivateRoute = ({ roles }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  const userHasRequiredRole = user && roles?.includes(user.role);

  if (!userHasRequiredRole) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;