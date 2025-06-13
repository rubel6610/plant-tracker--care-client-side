import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
   if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-dots loading-lg text-green-600"></span>
    </div>
  );
}
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default PrivateRoutes;