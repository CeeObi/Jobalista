import styled from 'styled-components';
import { Navbar } from '../components';


const Wrapper = styled.main`

`

const Landing = () => {
  return (
    <Wrapper>
        <Navbar />
        <div className='lg:flex justify-start items-center min-h-[calc(100vh-64px)]'>
            <div className='mx-10 my-4 flex items-center justify-center lg:w-1/2'>
              <img src="https://images.unsplash.com/photo-1693042766870-fc4293fd1ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fHw%3D" alt="Logo" className='w-3/5 lg:w-2/3' />
            </div>            
            <div className="info mt-4 lg:w-1/2 flex items-center justify-center">
              <div className=''>
                <h1 className='text-4xl text-center font-bold lg:text-5xl lg:text-start'>
                  App To <span className='text-blue-400'>Track</span> Jobs
                </h1>
                <p className='my-8 mx-10 lg:w-2/3 lg:mx-0'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cum mollitia! Ipsum placeat, deleniti ullam iusto similique distinctio molestias ea sed alias corrupti porro rerum voluptatum ipsam, neque vitae a?
                </p>
                <button className='btn btn-primary my-4 mx-10 lg:mx-0'>Login/Register</button>
              </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Landing