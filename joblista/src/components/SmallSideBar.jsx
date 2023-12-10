import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'





const SmallSideBar = () => {
  return (
  <div className='lg:hidden'>
            <div className='mx-auto'>
              <div className='mx-auto bg-black w- flex align-middle mb-10'>
                  <header className='mx-auto'>
                      <Logo />
                  </header> 
              </div> 
              <div className='flex justify-center'>
              <div>
                  <NavLinks />
              </div>
              </div>  
            </div>              
  </div>
  )
}






export default SmallSideBar