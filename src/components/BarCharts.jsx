import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const BarCharts = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="40%">
        <BarChart width={500} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false}  />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" barSize={75} activeBar={<Rectangle fill="#3a0896" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
  )
}



export default BarCharts