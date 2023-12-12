import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'





const SmallSideBar = () => {
  return (
  <div className='lg:hidden'>
            <div className='mx-auto'>
              <div className='mx-auto flex align-middle mb-10'>
                  <header className='mx-auto mt-9'>
                      <Logo />
                  </header> 
              </div> 
              <div className='flex justify-center'>
              <div className="mx-auto items-center grid row-auto" >
                  <NavLinks />
              </div>
              </div>  
            </div>              
  </div>
  )
}






export default SmallSideBar