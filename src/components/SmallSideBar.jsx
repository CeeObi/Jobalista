import React from 'react'
import NavLinks from './NavLinks'


const SmallSideBar = ({ barClass}) => {
  
  return (
  <div className={barClass}>
            <div className='mx-auto'>
              <div className='flex justify-center'>
              <div className="mx-auto items-center grid row-auto" >
                  <NavLinks  />
              </div>
              </div>  
            </div>              
  </div>
  )
}



export default SmallSideBar