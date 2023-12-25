import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { BigSideBar, Logo, Navbar } from '../../components';
import { useEffect } from 'react';

const getBigBarStatus = () => {
    const bgbStats = sessionStorage.getItem("showBigBar")
    return JSON.parse(bgbStats)
}

const SharedLayout = () => {
    const [showBigBar, setShowBigBar] = useState(getBigBarStatus())
    const [showLogo, setShowLogo] = useState(getBigBarStatus(false))
    const handleShowBigBar = () =>{
        const bigBarStat= !showBigBar
        sessionStorage.setItem("showBigBar",bigBarStat)  
        setShowBigBar(bigBarStat)
  }
  useEffect(()=>{setShowLogo(!showLogo);
    const handleResize = () => {
  if (window.innerWidth<1024){ 
    setShowLogo(false)                
}   
    if (window.innerWidth>=1024 && !showBigBar){ 
        setShowLogo(true)                
    }
}
window.addEventListener('resize', handleResize)
},[showBigBar])

  return (
  <main className="flex">
      {showBigBar&&
      <div className="w-1/5 hidden lg:block bg-base-200 shadow-sm"> 
          <BigSideBar />
      </div>
      }
      <div className="w-full">
      {showLogo&&<div className='flex w-full justify-center my-2'><Logo/></div>}
          <Navbar handleShowBigBar={handleShowBigBar} />      
          <Outlet /> 
      </div>
  </main>
  )
}




export default SharedLayout;
