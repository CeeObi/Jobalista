import React from 'react'
import { Outlet } from 'react-router-dom';
import { BigSideBar, Navbar, SmallSideBar } from '../../components';


const SharedLayout = () => {
  return (
<main className="lg:flex flex-wrap">
    <div className="lg:w-1/5"> 
        <SmallSideBar />
        <BigSideBar />
    </div>

    <div className="lg:w-4/5">
        <Navbar />      
        <Outlet /> 
    </div>
</main>
  )
}

export default SharedLayout;