import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';


function PrivateRoutes({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />
    } else {
        return (
            <>
                {children}
            </>
        )
    }


}

export default PrivateRoutes