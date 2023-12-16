import React from 'react'
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import StatsItem from './StatsItem'



const StatsContainer = () => {
    const {stats} = useSelector((store) => store.allJobsStore)

    
    
  return (
    <div className='mb-5 grid  gap-2 grid-cols-3 px-4 justify-items-center'> 
        <StatsItem/>




        <div>StatsContainer</div>
        <div>StatsContainer</div>        
    </div>
  )
}

export default StatsContainer