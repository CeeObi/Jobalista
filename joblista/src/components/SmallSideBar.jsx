import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'





const SmallSideBar = ({clicked, barClass}) => {


  
  return (
  <div className={barClass}>
            <div className='mx-auto'>
              <div className='mx-auto flex align-middle mb-10'>
                  <header className='mx-auto mt-9'>
                      <Logo />
                  </header> 
              </div> 
              <div className='flex justify-center'>
              <div className="mx-auto items-center grid row-auto" >
                  <NavLinks clicked={clicked} />
              </div>
              </div>  
            </div>              
  </div>
  )
}






export default SmallSideBar