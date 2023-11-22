import logo from '../assets/images/logo.png'
import {NavLink} from 'react-router-dom';

const Logo = () => {

  return (
    // <NavLink to='/' className="hidden lg:flex btn btn-primary text-3xl items-center">
            <div className='flex text-center items-center'>
                <img src={logo} alt="Joblista Logo" className='logo mx-2' />
                <span className='text-blue-400 font-bold text-xl '>Joblista</span>
            </div>   
    //</NavLink>
  )
}





export default Logo;