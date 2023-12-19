import React from 'react'
import notFoundPics from '../assets/images/404not_found.svg'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className='h-screen flex flex-col'>
      <img src={notFoundPics} alt="404 Picture" className='w-2/3 sm:w-3/5 lg:w-1/3  mt-7 self-center mx-2' />      
      <h3 className='text-center font-semibold mt-10'>Oh! Page Not Found</h3>
      <p className='text-center mt-3'>We can't seem to find the page you are looking for</p>
      <Link to="/" ><h6 className='text-md text-primary underline text-center mt-12 font-medium'>Back Home</h6></Link>
    </div>
  )
}




export default Error;