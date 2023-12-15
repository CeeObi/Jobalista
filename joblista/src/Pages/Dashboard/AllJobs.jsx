import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, JobsContainer, SearchContainer, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import FormDropDown from '../../components/FormDropDown';
import { createJob, handleChange, handleReset } from '../../features/job/jobSlice';
import { toast } from 'react-toastify';
import { allJob } from '../../features/allJobs/allJobsSlice';




const AllJobs = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(allJob())
  },[])

  return <>
    <SearchContainer/>
    <div className='mx-auto mt-5'>
      <div className='mx-10 py-3 mb-0 shadow bg-white'>  
      <h4 className='mx-6 font-semibold mt-8 mb-3'>5 Jobs Found</h4>    
          <JobsContainer />          
      </div>
    </div>
    </>
}





export default AllJobs