import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import FormDropDown from '../../components/FormDropDown';
import { createJob, editJob, handleChange, handleReset, hndleInputChange } from '../../features/job/jobSlice';
import { toast } from 'react-toastify';


const AddJob = () => {
  const dispatch = useDispatch()    
  const {isLoading, position, company, jobLocation, jobOptions, jobType, statusOptions, status, isEditing, editJobId, isTyping} = useSelector((store) => store.jobStore);//user from redux initialState);
  const {location} = useSelector((store) => store.userStore.user)

  const handleInputChange = (event) => {
    const evntname = event.target.name
    const evntvalue = event.target.value 
    dispatch(handleChange({evntname,evntvalue }))
    dispatch(hndleInputChange())
    
  }
  
  const handleInputReset = () => {  
    dispatch(handleReset())  
  }
  
  const handleSubmit = (e) => {  
    e.preventDefault()
    if (!position || !company || !jobLocation){      
        toast.error("please fill all fields")      
        return
    } 
    if (isEditing){
      const job = {position, company, jobLocation, jobType, status}
      dispatch(editJob({editJobId, job}))
      return
    }
    dispatch(createJob({position, company, jobLocation, jobType, status}))
  }

  useEffect(
    () => {  
      if (!isEditing){
      const evntname="jobLocation"
      const evntvalue=location
      dispatch(handleChange({evntname, evntvalue}))  }    
    },[isEditing]
  )



  return (
    <div className='mb-16'>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2> {isTyping ?"Edit Job" : "Add Job"}</h2> 
          </div>
          <Form onSubmit={handleSubmit}>
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 grid-cols-3 grid-rows-3 pb-0'>
                  <FormInput type="text" name="position" label="position"  changeVal={handleInputChange} value={position}/>             
                  <FormInput type="text" name="company" label="company"  changeVal={handleInputChange} value={company}/>             
                  <FormInput type="text" name="jobLocation" label="job location"  changeVal={handleInputChange} value={jobLocation}/>             
                  <FormDropDown defaultVal={status} options={statusOptions} label="Status" name="status" changeVal={handleInputChange}/>
                  <FormDropDown  defaultVal={jobType} options={jobOptions} label="job type" name="jobType" changeVal={handleInputChange}/>  
                  <div className='mt-5 mb-0 pb-0 flex items-center justify-between'>
                      <div className='mx-1 w-1/2'>
                          <FormInput  isDisabled={isTyping ? false : true} type="reset" value="Clear" size=" cursor-not-allowed btn btn-primary" handleClicked={handleInputReset}/> 
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