import React, { useEffect} from 'react'
import { JobsContainer, SearchContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { allJob } from '../../features/allJobs/allJobsSlice';




const AllJobs = () => {
  const dispatch = useDispatch()
  const {isLoading,jobs} = useSelector((store) => store.allJobsStore)

  useEffect(()=>{
    dispatch(allJob())
  },[])

  return <>

    {isLoading ?<div className='flex content-center w-full mt-10'>
            <span className="loading loading-spinner loading-xs text-primary">sending...</span> 
        </div> : <SearchContainer/>}
    <div className='mx-auto mt-5'>
      <div className='mx-10 py-3 mb-0 shadow bg-white'> 
          {(jobs.length>0) && <h4 className='mx-6 font-semibold mt-8 mb-3'>{jobs.length} Job{(jobs.length !== 1) && "s"} Found</h4>    }
          <JobsContainer jobs={jobs}  />          
      </div>
    </div>
    </>
}





export default AllJobs