import React from 'react'

const JobInfo = ({icon,jobInfo,clsNm}) => {
  return (
    
        <div className={`flex justify-start items-center ms-4 my-0 py-2 ${clsNm}`}>
            <div className=" ">
                {/* <FaBriefcase className='text-gray-500'/> */}
                {icon}
            </div> 
            <div className="mx-2 capitalize font-semibold text-base text-gray-500 ">{jobInfo}</div>
        </div>                                
    
  )
}

export default JobInfo