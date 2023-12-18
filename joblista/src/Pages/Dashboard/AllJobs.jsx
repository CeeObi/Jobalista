import React, { useEffect} from 'react'
import { JobsContainer, LoadingContainer, SearchContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { allJob } from '../../features/allJobs/allJobsSlice';




const AllJobs = () => {
  const dispatch = useDispatch()
  const {isLoading,jobs,totalJobs,page,numberOfPages} = useSelector((store) => store.allJobsStore)

  useEffect(()=>{
    dispatch(allJob())
  },[])

  return <>
    {isLoading ?<LoadingContainer/> : <SearchContainer/>}
    <div className='mx-auto mt-5'>
      <div className='mx-10 py-3 mb-0 shadow bg-white'> 
          {(totalJobs>0) && <h4 className='mx-6 font-semibold mt-8 mb-3'>{totalJobs} Job{(totalJobs !== 1) && "s"} Found</h4>    }
          <JobsContainer jobs={jobs} page={page} totalJobs={totalJobs} numOfPages={numberOfPages}  />          
      </div>
    </div>
    </>
}





export default AllJobs