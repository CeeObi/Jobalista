import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { BigSideBar, Navbar, SmallSideBar } from '../../components';


const SharedLayout = () => {
  const [showBigBar, setShowBigBar] = useState(true)

  const handleShowBigBar = () =>{
        setShowBigBar(!showBigBar)
  }




  return (
  <main className="lg:flex flex-wrap">
      {showBigBar&&
      <div className="lg:w-1/5"> 
          <BigSideBar />
      </div>
      }

      <div className="lg:w-4/5 bg-black">
          <Navbar handleShowBigBar={handleShowBigBar} />      
          <Outlet /> 
      </div>
  </main>
  )
}




export default SharedLayout;
