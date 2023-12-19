import logo from '../assets/images/logo.png'
import {NavLink} from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to='/' className='flex text-center items-center'>
                <img src={logo} alt="Joblista Logo" className='logo mr-2' />
                <span className='text-blue-400 font-extrabold text-xl tracking-wider '>Joblista</span>            
    </NavLink>
  )
}





export default Logo;