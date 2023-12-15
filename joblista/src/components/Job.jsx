import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Job = ({_id,company, jobType,position,status,jobLocation}) => {
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
                    <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 mt-0 pt-0"></hr>
                    <div className="card-body grid  grid-cols-2 bg-gray-100">     
                        <div>
                            <div className="flex justify-start items-center ms-4 my-0 py-2">
                                <div className=" ">
                                    <FaLocationArrow className='text-gray-500'/>
                                </div>    
                                <div className="mx-2 capitalize font-semibold text-base text-gray-500">{jobLocation}</div>
                            </div>                        
                            <div className='mt-3'>
                                <div className="flex justify-start items-center ms-4 my-0 py-2 ">
                                    <div className=" ">
                                        <FaBriefcase className='text-gray-500'/>
                                    </div> 
                                    <div>
                                        <div className="mx-2 capitalize font-semibold text-base text-gray-500">{jobType}</div>
                                    </div>   
                                </div>                                
                            </div>
                        </div> 
                        <div>
                            <div className="flex justify-start items-center ms-4 my-0 pt-2 pb-0">
                                <div className=" ">
                                    <FaCalendarAlt className='text-gray-500'/>
                                </div>    
                                <div className="mx-2 capitalize font-semibold text-base text-gray-500">Jan 27th, 2020</div>
                            </div>
                            <div className={`mx-4 mt-0 ${(status==="pending")?"bg-purple-200":(status==="interview")?"bg-green-200":"bg-red-200"}  rounded-lg w-1/2`}>
                                <p className={`p-1 text-center ${(status==="pending")?"text-purple-700":(status==="interview")?"text-green-700":"text-red-700"} font-semibold capitalize`}>{status}</p>
                            </div>
                        </div> 
                    </div>
                    <div className="card-actions justify-start mx-4 mb-3 bg-gray-100">
                       <Link to="/add-job"><button className="btn btn-primary px-2 btn-sm">Edit</button></Link> 
                        <button className="btn-outline btn-error border rounded-md px-2 btn-sm">Delete</button>
                    </div>
                </div>
  )
}

export default Job