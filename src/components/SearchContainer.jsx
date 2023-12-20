import React, { useMemo, useState } from 'react'
import { Form } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './FormInput';
import FormDropDown from './FormDropDown';
import SubmitBtn from './SubmitBtn';
import { handleChange, handleReset } from '../features/allJobs/allJobsSlice';



const SearchContainer = () => {
  const[localSearch,setLocalSearch] = useState("")
    const dispatch = useDispatch()
    const { jobOptions, statusOptions} = useSelector((store) => store.jobStore);
    const {isLoading, searchStatus, searchType,sortOptions,sort,page} = useSelector((store) => store.allJobsStore)
    
    const handleInputChange = (event) => {
      const evntname = event.target.name
      const evntvalue = event.target.value 
      dispatch(handleChange({evntname, evntvalue}))
    }

    const handleClearValues = (e) => {
      dispatch(handleReset())  
      setLocalSearch("")
      e.preventDefault()
    }
    
    const debounce = () =>{
      let timeoutID;
      return (e)=>{
        setLocalSearch(e.target.value)
        clearTimeout(timeoutID)
        timeoutID = setTimeout(()=>{
            dispatch(handleChange({evntname:e.target.name, evntvalue:e.target.value}))
          },1000
        )
      }
    }

    const optimizedDebounce = useMemo(()=>debounce(),[])

  return (
    <div className=''>
        <div className='mx-10 mt-5 pt-10 px-10 pb-0 mb-0 shadow bg-white'>
          <div className='mt-5'>
              <h2> Search form</h2> 
          </div>
          <Form >
              <div className='mt-5 mb-0 grid grid-flow-row-dense gap-4 sm:grid-cols-3 grid-rows-3 pb-10 sm:pb-0 grid-cols-1'>
                  <FormInput type="search" name="search" label="search"  changeVal={optimizedDebounce} value={localSearch}/>    
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