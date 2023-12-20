import React from 'react'
import NavLinks from './NavLinks'


const SmallSideBar = ({clicked, barClass}) => {
  
  return (
  <div className={barClass}>
            <div className='mx-auto'>
              <div className='flex justify-center'>
              <div className="mx-auto items-center grid row-auto" >
                  <NavLinks clicked={clicked}  />
              </div>
              </div>  
            </div>              
  </div>
  )
}



export default SmallSideBar