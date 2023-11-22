import {BsCart3, BsMoonFill, BsSunFill} from 'react-icons/bs';
import {FaBarsStaggered} from 'react-icons/fa6';

import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';




const Navbar = () => {
    // const dispatch = useDispatch()
    // const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
    // const handleTheme = () => {
    //     dispatch(toggleTheme())        
    
    return (
    <nav className="bg-base-200">
        <div className="navbar align-element">
            {/*TITLE */}
            <div className="navbar-start">                
                <Logo />   
                
            </div>            
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    <NavLinks />
                </ul>
            </div>
            <div className="navbar-end">
               <span className='hidden lg:flex'>None</span>
               {/* DROPDOWN */}
               <div className="dropdown">
                    <label tabIndex={0} className='btn btn-ghost btn-sm lg:hidden'>
                        <FaBarsStaggered className="h-5 w-5 mb-0" />
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-80'>
                        <NavLinks />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}




export default Navbar;