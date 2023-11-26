import React from 'react'
import { Outlet } from 'react-router-dom';
import { BigSideBar, Navbar, SmallSideBar } from '../../components';


const SharedLayout = () => {
  return (
<main class="lg:flex flex-wrap">
    <div class="lg:w-1/5"> 
        <SmallSideBar />
        <BigSideBar />
    </div>

    <div class="lg:w-4/5">
        <Navbar />      
        <Outlet /> 
    </div>
</main>
  )
}

export default SharedLayout;