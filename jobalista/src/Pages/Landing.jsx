import React from 'react'
import logo from '../assets/images/logo.png'

const Landing = () => {
  return (
    <main>
        <nav>
            <div className='flex text-center items-center'>
                <img src={logo} alt="Joblista Logo" className='logo mx-3' />
                <span className='text-blue-400 font-bold text-xl '>Joblista</span>
            </div>
        </nav>
    </main>
  )
}

export default Landing