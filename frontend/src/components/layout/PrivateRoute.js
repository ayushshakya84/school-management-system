import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const PrivateRoute = ({ roles }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, check for role authorization
  const userHasRequiredRole = user && roles?.includes(user.role);

  if (!userHasRequiredRole) {
    // Redirect to their own dashboard if they try to access a forbidden route
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  // If authenticated and authorized, render the child routes
  return <Outlet />;
};

export default PrivateRoute;