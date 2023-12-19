import React, { useState } from 'react'
import BarCharts from './BarCharts'
import AreaCharts from './AreaCharts'
import { useSelector } from 'react-redux'






const ChartsContainer = () => {
  const [barChart,setBarChart] = useState(true)
  const {monthlyApplications:data} = useSelector((store) => store.allJobsStore)
  const handleDisplayChart = () => {
    setBarChart(!barChart)
  }

  return (
  <>  
        <h4 className='text-center font-semibold mt-16'>Monthly Applications</h4>
        <h5 className='text-center font-semibold mt-6 text-primary mb-3' onClick={handleDisplayChart}>{!barChart ? "BarChart" : "AreaChart"}</h5>
        {barChart ? <BarCharts data={data} /> : <AreaCharts data={data} />}
  </>
  )
}



export default ChartsContainer