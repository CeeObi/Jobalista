import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import NavLinks from './NavLinks';

import Logo from './Logo';
import DropDown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from "react-icons/fa";
import { logoutUser, toggleSideBar } from '../features/user/userSlice';
import SmallSideBar from './SmallSideBar';

import { FaTimes } from 'react-icons/fa'
                




const Navbar = () => {
    const [showModal,setShowModal]=useState(true)
    const [wasModalOn, setWasModalOn] = useState(false)
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.userStore)
    // const handleTheme = () => {
    //     dispatch(toggleTheme())        
    
    const handleToggleSideBar = () => {        
        dispatch(toggleSideBar())
        // setWasModalOn(true)       

    }
    const handleLogout=() => {
        dispatch(logoutUser())
    }

    
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 1024)
                setShowModal(false)
            // else{   
            // if (wasModalOn){  
            //     if (window.innerWidth<1024){              
            //         setShowModal(true) }                 
            // }}
      }      
          window.addEventListener('resize', handleResize)
        })


    
    return (
    <nav className="bg-base-200 ">
        <div className="navbar align-element">
            {/*TITLE */}
            <div className="navbar-start">  
                <Popup  trigger={
                        <button type='button' className='btn btn-primary btn-sm toggle-primary  mx-2 ' onClick={handleToggleSideBar}>
                            <FaAlignLeft />     
                        </button>  
                } position="center" modal open={showModal} onClose={() => setShowModal(false)}>
                {close => (
                <div className='' style={{ height: '80vh', overflow: 'scroll' }}>
                    <button className="button " onClick={() => {close();setWasModalOn(false)}}>
                        <FaTimes />
                    </button>
                    <SmallSideBar/>
                </div>
                )}
                </Popup>         
            </div>  
                    
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    <Logo />
                </ul>
            </div>
            <div className="navbar-center lg:hidden"> 
                <ul className='menu menu-horizontal'>
                    <h1>Dashboard</h1>
                </ul>
            </div>
            <div className="navbar-end ">
                <details className='flex btn btn-sm dropdown dropdown-end mr-6'>
                    <summary tabIndex={0} className='flex'>
                        <FaUserCircle className=""/>
                        <span className='mx-2' >{user?.name}</span> 
                        <FaCaretDown />
                    </summary>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 flex items-center'  >
                        <li><button onClick={handleLogout} className='w-100 mx-3 px-10 btn-warning block'> Logout</button></li>
                    </ul>
                </details>    
                               </div>
        </div>
    </nav>
  )
}




export default Navbar;