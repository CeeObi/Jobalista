import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { BigSideBar, Navbar } from '../../components';

const getBigBarStatus = () => {
    const bgbStats = sessionStorage.getItem("showBigBar")
    return JSON.parse(bgbStats)
}

const SharedLayout = () => {
    const [showBigBar, setShowBigBar] = useState(getBigBarStatus())
    const handleShowBigBar = () =>{
        const bigBarStat= !showBigBar
        sessionStorage.setItem("showBigBar",bigBarStat)  
        setShowBigBar(bigBarStat)
  }

  return (
  <main className="flex">
      {showBigBar&&
      <div className="w-1/5 hidden lg:block bg-base-200 shadow-sm"> 
          <BigSideBar />
      </div>
      }
      <div className="w-full">
          <Navbar handleShowBigBar={handleShowBigBar} />      
          <Outlet /> 
      </div>
  </main>
  )
}




export default SharedLayout;
