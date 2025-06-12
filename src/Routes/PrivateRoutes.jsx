import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    return children;
};

export default PrivateRoutes;