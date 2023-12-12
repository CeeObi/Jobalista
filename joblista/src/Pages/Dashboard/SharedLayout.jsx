import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { BigSideBar, Navbar, SmallSideBar } from '../../components';


const SharedLayout = () => {
  const [showBigBar, setShowBigBar] = useState(true)

  const handleShowBigBar = () =>{
        setShowBigBar(!showBigBar)
  }




  return (
  <main className="flex">
      {showBigBar&&
      <div className="w-1/4"> 
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
