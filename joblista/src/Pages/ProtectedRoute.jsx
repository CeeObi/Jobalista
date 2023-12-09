import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




const ProtectedRoute = ({children}) => {
        const navigate=useNavigate()
        const {user} = useSelector((state) => state.userStore)
        if (!user){
            return navigate("/landing")            
        }
        return children
        
        
        
}




export default ProtectedRoute;