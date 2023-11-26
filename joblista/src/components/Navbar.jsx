import NavLinks from './NavLinks';
import Logo from './Logo';
import DropDown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';






const Navbar = () => {
    // const dispatch = useDispatch()
    // const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
    // const handleTheme = () => {
    //     dispatch(toggleTheme())        
    
    return (
    <nav className="bg-base-200 ">
        <div className="navbar align-element">
            {/*TITLE */}
            <div className="navbar-start">       
                <div className='mx-2'>
                    <Logo />
                </div>         
            </div>            
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    <NavLinks />
                </ul>
            </div>
            <div className="navbar-end">
               <span className='hidden lg:flex'>None</span>
               {/* DROPDOWN */}
               <DropDown />
            </div>
        </div>
    </nav>
  )
}




export default Navbar;