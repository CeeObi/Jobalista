import React, { useState } from 'react';
import SmallSideBar from './SmallSideBar';

const BigSideBar = () => {
  const [showModal,setShowModal]=useState(false)
  
  const handleClicked = () => {
    setShowModal(false);
  }


  
  return (<div>
  <SmallSideBar clicked={handleClicked}  barClass='hidden lg:flex'/></div>
  )
}

export default BigSideBar