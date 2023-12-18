import React, { useEffect, useState } from 'react'
import { Form, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import FormInput from './FormInput';
import FormDropDown from './FormDropDown';
import SubmitBtn from './SubmitBtn';
import { handleChange, handleReset } from '../features/allJobs/allJobsSlice';



const SearchContainer = () => {
    const dispatch = useDispatch()
    // const [searchParams,setSearchParams] = useSearchParams()
    const { jobOptions, statusOptions} = useSelector((store) => store.jobStore);//user from redux initialState);
    // const {location} = useSelector((store) => store.userStore.user)
    const {isLoading, search, searchStatus, searchType,sortOptions,sort,page} = useSelector((store) => store.allJobsStore)
    
    const handleInputChange = (event) => {
      const evntname = event.target.name
      const evntvalue = event.target.value 
      dispatch(handleChange({evntname, evntvalue}))
    }

    const handleClearValues = (e) => {
      dispatch(handleReset())  
      e.preventDefault()
    }
    
    
    
    const handleSubmit = (e) => {  
      // dispatch(handleReset())  
      e.preventDefault()
      const payload = {sort:sort,page:page,status:searchStatus,jobType:searchType}
      console.log(payload)
      // if (!position || !company || !jobLocation){      
      //     toast.error("please fill all fields")      
      //     return
      // } 
      
      // dispatch(createJob({position, company, jobLocation, jobType, status}))
    }
  



  return (
    <div className=''>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2> Search form</h2> 
          </div>
          <Form onSubmit={handleSubmit}>
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 grid-cols-3 grid-rows-3 pb-0'>
                  <FormInput type="search" name="search" label="search"  changeVal={handleInputChange} value={search}/>    
                  <FormDropDown  defaultVal={searchStatus}  options={["all",...statusOptions]} label="Status" name="searchStatus" changeVal={handleInputChange}/>
                  <FormDropDown defaultVal={searchType} options={["all",... jobOptions]} label="Type" name="searchType" changeVal={handleInputChange}/>         
                  <FormDropDown defaultVal={sort} options={sortOptions} label="sort" name="sort" changeVal={handleInputChange}/> 
                  <div className='mt-5 mb-0 pb-0 flex items-center justify-between'>                 
                      <div className='mt-4 mx-1 w-full'>
                          <SubmitBtn type="button" onClick={handleClearValues} text="Clear Filters" isLoading={isLoading} clasName="btn-secondary"/>
                      </div>                      
                  </div>  
              </div>
          </Form>
        </div>      
    </div>
  )
}

export default SearchContainer