import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import FormDropDown from '../../components/FormDropDown';


const AddJob = () => {
    const dispatch = useDispatch()    
    const {isLoading, position, company, jobLocation, jobOptions, jobType, statusOptions, status, isEditing, editJobId} = useSelector((store) => store.jobStore);//user from redux initialState);
    const [jobData,setJobData] = useState(
      {
      jposition: position,
      jcompany: company,
      jjobLocation: jobLocation,
    })
    
    const {jposition,jcompany,jjobLocation} = jobData

  const handleChange = (event) => {
    setJobData({...jobData, [event.target.name] : event.target.value })
  }   
  
  const handleSubmit = (e) => {  
    e.preventDefault()
    const {jposition,jjobLocation,jcompany} = jobData
    if (!jposition || !jcompany || !jjobLocation){      
        toast.error("please fill all fields")      
        return
    }    
    setJobData({
      jposition: position,
      jcompany: company,
      jjobLocation: jobLocation,
    })
    // return dispatch(editUserData({email:email,location:location,name:name,lastName:lastName}));  
}



  return (
    <div className=''>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2> {isEditing ?"Edit Job" : "Add Job"}</h2> 
          </div>
          <Form onSubmit={handleSubmit}>
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 grid-cols-3 grid-rows-3 pb-0'>
                  <FormInput type="text" name="position" label="position"  changeVal={handleChange} value={jposition}/>             
                  <FormInput type="text" name="company" label="company"  changeVal={handleChange} value={jcompany}/>             
                  <FormInput type="text" name="jobLocation" label="job location"  changeVal={handleChange} value={jjobLocation}/>             
                  <FormDropDown defaultVal={status} options={statusOptions} label="Status" name="status" changeVal={handleChange}/>
                  <FormDropDown defaultVal={jobType} options={jobOptions} label="job type" name="jobType" changeVal={handleChange}/>  
                  <div className='mt-5 mb-0 pb-0 flex items-center justify-between'>
                      <div className='mx-1 w-1/2'>
                          <FormInput type="reset" value="Clear" size="btn btn-primary" /> 
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