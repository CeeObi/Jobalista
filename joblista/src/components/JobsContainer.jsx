import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job';

const JobsContainer = () => {
    const dispatch = useDispatch();
    const {jobs,isLoading} = useSelector((store) => store.allJobsStore)
    if (isLoading){
        return  <div className='flex content-center w-full'>
            <span className="loading loading-spinner loading-xs text-primary">sending...</span> 
        </div>
        }

    if (jobs.length==0){
        return  (
        <div className='flex content-center w-full'>
            <div className='mx-5 w-full'><h4>No job to display...</h4></div> 
        </div>
        )
    }

    return (
        <div className='mb-0 grid  gap-4 grid-cols-2 pb-0 justify-items-center'>
               {jobs.map(
                (eachJob) =>{ 
                    const {_id,company, jobType,position,status,jobLocation} = eachJob
                    return <Job key={eachJob._id} text={company}/>}
               )}
        </div>
    )
}

export default JobsContainer