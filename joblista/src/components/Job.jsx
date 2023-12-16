import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JobInfo from './JobInfo';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteJob, setEditJob } from '../features/job/jobSlice';



const Job = ({_id,company, jobType,position,status,jobLocation,createdAt}) => {
    const date = moment(createdAt).format("MMM Do, YYYY");
    const dispatch = useDispatch()
    
    const handleDeleteJob = () =>{
        dispatch(deleteJob(_id))        
    }

    const handleEditJob = () => {
        dispatch(setEditJob({editJobId:_id,company,jobLocation,jobType,position,status}))
    }
        


  return (
    <div id={_id} className="card card-compact w-full bg-base-100 shadow-xl mt-3 border">
                    <div className='card-title flex justify-start'>
                        {/* <figure className=' w-1/4'><img className=' w-3/4 mt-3 mb-2 rounded-md' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                        <div className=' h-10 w-10 bg-blue-700 ms-4 mt-3 mb-2 rounded-md p-0'>
                            <div className='text-center px-0 mb-0 leading-10  text-white capitalize' >{company[0]}</div>
                        </div>
                        <div className='mx-2'>
                            <h6 className="card-title text-left mb-0 pb-0 text-base font-bold capitalize">{position}</h6>
                            <h6 className='mt-0 pt-0 leading-3 text-sm text-gray-500 capitalize'>{company}</h6>
                        </div>
                    </div>
                    <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700 mt-0 pt-0"></hr>
                    <div className="card-body grid  grid-cols-2 bg-gray-100">     
                        <div>                            
                            <JobInfo icon={<FaLocationArrow className='text-gray-500'/>} jobInfo={jobLocation}/>
                            <JobInfo icon={<FaBriefcase className='text-gray-500'/>} jobInfo={jobType} clsNm='mt-3'/>                            
                        </div> 
                        <div>
                            <JobInfo icon={<FaCalendarAlt className='text-gray-500'/>} jobInfo={date} clsNm="pb-1"/>
                            <p className={`rounded-lg w-1/2 mx-4  p-1 text-center ${(status==="pending")?"text-purple-700 bg-purple-200":(status==="interview")?"text-green-700 bg-green-200":"text-red-700 bg-red-200"} font-semibold capitalize`}>{status}</p>
                        </div> 
                    </div>
                    <div className="card-actions justify-start mx-4 mb-3 bg-gray-100">
                       <Link to="/add-job"><button className="btn btn-primary px-2 btn-sm" onClick={handleEditJob}>Edit</button></Link> 
                        <button name={_id} className="btn-outline btn-error border rounded-md px-2 btn-sm" onClick={handleDeleteJob}>Delete</button>
                    </div>
                </div>
  )
}

export default Job