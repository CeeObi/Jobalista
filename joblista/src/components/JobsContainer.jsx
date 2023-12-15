import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const JobsContainer = () => {
    const dispatch = useDispatch();
    const {jobs,isLoading} = useSelector((store) => store.allJobsStore)
    
    if (isLoading){
        return  <div>
            <span className="loading loading-spinner loading-xs text-primary">sending...</span> 
        </div>
        }

    if (jobs.length==0){
        return  <h4 className='text-center'>No jobs to display...</h4>
    }

    return (
        
        <div>JobsContainer</div>
    )
}

export default JobsContainer