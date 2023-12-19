import React from 'react'
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import StatsItem from './StatsItem'



const StatsContainer = () => {
    const {stats} = useSelector((store) => store.allJobsStore)
    
    
  return (
    <div className='mb-5 grid  gap-2 grid-cols-3 px-4 justify-items-center'> 
    {
      Object.entries(stats).map((stat)=>{
        let statsColor, icon, statsBColor, statsIconBg
        if (stat[0]==="pending"){statsColor="text-yellow-600";statsBColor="border-b-yellow-600"; statsIconBg="bg-yellow-100"; icon=<FaSuitcaseRolling className='text-3xl text-yellow-600' />}
        if (stat[0]==="interview"){statsColor="text-blue-600"; statsBColor="border-b-blue-600"; statsIconBg="bg-blue-100"; icon=<FaCalendarCheck className='text-3xl text-blue-600' />}
        if (stat[0]==="declined"){statsColor="text-red-600"; statsBColor="border-b-red-600"; statsIconBg="bg-red-100"; icon=<FaBug className='text-3xl text-red-600' />}
        


        return  <StatsItem key={stat[0]} statsColor={statsColor} icon={icon} statsIconBg={statsIconBg} statsTitle={stat[0]} count={stat[1]} statsBColor={statsBColor}    />
      })

      



    }     
    </div>
  )
}

export default StatsContainer