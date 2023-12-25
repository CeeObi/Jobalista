import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../../features/user/userSlice';




const Profile = () => {
    const dispatch = useDispatch()
    const {user,isLoading} = useSelector((state) => state.userStore);//user from redux initialState);
    const [userData,setUserData] = useState({
      name: user?user.name :" ",
      lastName: user?user.lastName :" ",
      location: user?user.location :" ",
      email: user?user.email :" ",
    })
    

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name] : event.target.value })
  } 
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const {email,location,name,lastName} = userData
    if (!email || !name || !lastName || !location){      
        toast.error("please fill all fields")      
        return
    }    
    setUserData({
      name: name,
      lastName: lastName,
      location: user?user.location :" ",
      email: user?user.email :" ",
    })
    return dispatch(editUserData({email:email,location:location,name:name,lastName:lastName}));  
}
  return (
    <div className=''>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2>Profile</h2> 
          </div>
          <Form onSubmit={handleSubmit}>
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 grid-cols-1 sm:grid-cols-3 grid-rows-3 pb-10 sm:pb-0'>
                  <FormInput type="text" name="name" label="first name"  changeVal={handleChange} value={userData.name}/>             
                  <FormInput type="text" name="lastName" label="last name"  changeVal={handleChange} value={userData.lastName}/>             
                  <FormInput type="email" name="email" label="email"  changeVal={handleChange} value={userData.email}/>             
                  <FormInput type="text" name="location" label="location"  changeVal={handleChange} value={userData.location}/>             
                  <div className='mt-9 form-control mb-0 pb-0'>
                      <SubmitBtn text="Save Changes" isLoading={isLoading}/>  
                  </div>             
              </div>
          </Form>
        </div>      
    </div>
  )
}




export default Profile