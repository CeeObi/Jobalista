import React, { useState } from 'react';
import SmallSideBar from './SmallSideBar';
import Logo from './Logo';

const BigSideBar = () => {
  const [showModal,setShowModal]=useState(false)  
  const handleClicked = () => {
    setShowModal(false);
  }

  
  return (
  <div className=''>
      <div className='mx-auto flex justify-center mt-9 mb-24'>
          <Logo/>
      </div>
      <SmallSideBar  barClass='hidden lg:flex'/>
  </div>
  )
}

export default BigSideBar