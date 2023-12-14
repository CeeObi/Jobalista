import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../../features/user/userSlice';
import FormDropDown from '../../components/FormDropDown';


const AddJob = () => {
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
  
  const handleSelectChange = (event) => {
    console.log(event.target.value)
    
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


const statusOptions = ["pending","fulfilled"]
const jobOptions = ["full-time","part-time","casual"]


  return (
    <div className=''>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2>Add Job</h2> 
          </div>
          <Form onSubmit={handleSubmit}>
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 grid-cols-3 grid-rows-3 pb-0'>
                  <FormInput type="text" name="position" label="position"  changeVal={handleChange} value={userData.name}/>             
                  <FormInput type="text" name="Company" label="Company"  changeVal={handleChange} value={userData.lastName}/>             
                  <FormInput type="text" name="job location" label="job location"  changeVal={handleChange} value={userData.location}/>             
                  <FormDropDown options={statusOptions} label="Status" name="status" changeVal={handleSelectChange}/>
                  <FormDropDown options={jobOptions} label="job type" name="jobType" changeVal={handleSelectChange}/>                  
                  <div className='mt-9 mb-0 pb-0 flex items-center justify-between'>
                      <div className='mx-1 w-1/2'>
                          <SubmitBtn type="reset" text="Clear"/>  
                      </div>                      
                      <div className='mx-1 w-1/2'>
                          <SubmitBtn text="Submit" isLoading={isLoading}/>
                      </div>                      
                  </div>  
              </div>
          </Form>
        </div>      
    </div>
  )
}

export default AddJob