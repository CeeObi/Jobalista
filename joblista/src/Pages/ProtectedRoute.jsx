import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({children}) => {
        const {user} = useSelector((state) => state.userStore)        
        if (!user){
            return <Navigate to="/landing" replace />;
        }
        return children        
}




export default ProtectedRoute;