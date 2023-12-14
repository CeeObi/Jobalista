import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import FormDropDown from '../../components/FormDropDown';
import { handleChange, handleReset } from '../../features/job/jobSlice';


const AddJob = () => {
    const dispatch = useDispatch()    
    const {isLoading, position, company, jobLocation, jobOptions, jobType, statusOptions, status, isEditing, editJobId} = useSelector((store) => store.jobStore);//user from redux initialState);
   

  const handleInputChange = (event) => {
    const tname = event.target.name
    const tvalue = event.target.value 
    dispatch(handleChange({tname,tvalue }))
  }   
  
  const handleSubmit = (e) => {  
    e.preventDefault()
    console.log("Yess")
    // const {jposition,jjobLocation,jcompany} = jobData
    // if (!jposition || !jcompany || !jjobLocation){      
    //     toast.error("please fill all fields")      
    //     return
    // } 

    // return dispatch(editUserData({email:email,location:location,name:name,lastName:lastName}));  
}

const handleInputReset = () => {
  dispatch(handleReset())

}


  return (
    <div className=''>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2> {isEditing ?"Edit Job" : "Add Job"}</h2> 
          </div>
          <Form onSubmit={handleSubmit}>
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 grid-cols-3 grid-rows-3 pb-0'>
                  <FormInput type="text" name="position" label="position"  changeVal={handleInputChange} value={position}/>             
                  <FormInput type="text" name="company" label="company"  changeVal={handleInputChange} value={company}/>             
                  <FormInput type="text" name="jobLocation" label="job location"  changeVal={handleInputChange} value={jobLocation}/>             
                  <FormDropDown defaultVal={status} options={statusOptions} label="Status" name="status" changeVal={handleInputChange}/>
                  <FormDropDown defaultVal={jobType} options={jobOptions} label="job type" name="jobType" changeVal={handleInputChange}/>  
                  <div className='mt-5 mb-0 pb-0 flex items-center justify-between'>
                      <div className='mx-1 w-1/2'>
                          <FormInput type="reset" value="Clear" size="btn btn-primary" handleClicked={handleInputReset}/> 
                      </div>                      
                      <div className='mt-4 mx-1 w-1/2'>
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