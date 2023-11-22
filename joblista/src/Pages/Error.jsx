import React from 'react'
import notFoundPics from '../assets/images/404not_found.svg'
import { Link } from 'react-router-dom'


const Error = () => {
  return (<div className='h-screen '>
        <div className='flex items-center justify-center'>
          <img src={notFoundPics} alt="404 Picture" className='sm:w-3/5 lg:w-1/3  mt-7' />      
        </div>
        <h3 className='text-center font-semibold mt-8'>Oh! Page Not Found</h3>
        <p className='text-center mt-4'>We can't seem to find the page you are looking for</p>
        <Link to="/" ><h6 className='text-md text-primary underline text-center mt-10 font-medium'>Back Home</h6></Link>
    </div>
  )
}




export default Error;