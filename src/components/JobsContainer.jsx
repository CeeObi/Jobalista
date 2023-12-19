import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job';
import PaginationBtnContainer from './PaginationBtnContainer';





const JobsContainer = ({jobs,totalJobs,page,numOfPages}) => {
    
    if (totalJobs==0){
        return  (
        <div className='flex content-center w-full'>
            <div className='mx-5 w-full'><h4 className='mx-6 font-semibold mt-3 mb-3'>No job to display...</h4></div> 
        </div>
        )
    }

    return (<>
        <div className='mb-5 grid  gap-4 grid-cols-2 px-5 justify-items-center'> 
               {jobs.map(
                (eachJob) =><Job key={eachJob._id} {...eachJob}/>
               )}
        </div>
        <div className=' px-5 my-5'>
            {numOfPages>1 && <PaginationBtnContainer page={page} totalJobs={totalJobs} numOfPages={numOfPages} />}
        </div>
        </>
    )
}

export default JobsContainer