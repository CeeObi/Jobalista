import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { FormInput, JobsContainer, SearchContainer, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import FormDropDown from '../../components/FormDropDown';
import { createJob, handleChange, handleReset } from '../../features/job/jobSlice';
import { toast } from 'react-toastify';




const AllJobs = () => {
 


  return <>
    <SearchContainer/>
    <div className='mx-auto mt-5'>
      <div className='flex justify-center mx-10 px-10 py-3 mb-0 shadow bg-white'>
      <div className='mt-3 mb-0 grid grid-flow-row-dense gap-4 grid-cols-2 grid-rows-3 pb-0 bg-gray-500 text-center items-center'>
          <JobsContainer/>
        </div>
      </div>
    </div>
  
    
    </>
}





export default AllJobs