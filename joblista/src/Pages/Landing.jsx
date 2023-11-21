import React from 'react'
import logo from '../assets/images/logo.png'

const Landing = () => {
  return (
    <main>
        <nav>
            <div className='flex text-center items-center'>
                <img src={logo} alt="Joblista Logo" className='logo mx-2' />
                <span className='text-blue-400 font-bold text-xl '>Joblista</span>
            </div>
        </nav>
        <div className='flex justify-start mx-10 items-center'>
            <div className='mx-10 mt-4 flex items-center w-1/2'>
              <img src={logo} alt="Logo" className='' />
            </div>            
            <div className="info mx-10 mt-4 w-1/2 flex items-center">
            <div>
              <h1 className=' font-bold'>
                App To <span className='text-primary'>Track</span> Jobs
              </h1>
              <p className='mt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cum mollitia! Ipsum placeat, deleniti ullam iusto similique distinctio molestias ea sed alias corrupti porro rerum voluptatum ipsam, neque vitae a?
              </p>
              <button className='btn btn-primary my-4'>Login/Register</button>
              </div>
            </div>

        </div>
    </main>
  )
}

export default Landing