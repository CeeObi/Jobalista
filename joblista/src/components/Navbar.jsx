import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle, FaTimesCircle } from "react-icons/fa";
import { logoutUserReset, toggleSideBar } from '../features/user/userSlice';
import SmallSideBar from './SmallSideBar';
import SubmitBtn from './SubmitBtn';
import { Link } from 'react-router-dom';



                
const Navbar = ({handleShowBigBar}) => {
    const [smallShowModal,setSmallShowModal]=useState(false)
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.userStore)
    const handleToggleSideBar = () => {   
        if (window.innerWidth < 1024){
            setSmallShowModal(true)     
            sessionStorage.setItem("showModalstats",true)  
            dispatch(toggleSideBar())
        }
        if (window.innerWidth >= 1024){
            handleShowBigBar()
        }
    }

    const handleLogout=() => {
        dispatch(logoutUserReset("Logged out successfully.."))
    }

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1024)
            setSmallShowModal(false) 
        if (window.innerWidth<1024){ 
            const modalsrch=sessionStorage.getItem("showModalstats")
            if (modalsrch==="true"){ 
                setSmallShowModal(true) }  
            if (modalsrch==="false"){
                setSmallShowModal(false) }                    
        }
        }   
        window.addEventListener('resize', handleResize)
    })

    const handleClicked = () => {
        sessionStorage.setItem("showModalstats",false);
        setSmallShowModal(false)        
      }
    
    
    return (
    <nav className="bg-base-200 flex items-center ">
        <div className="navbar">
            {/*TITLE */}
            <div className="navbar-start "> 
                {!user ?   
                <div className="navbar-center ">
                        <ul className='menu menu-horizontal'>
                            <Logo />
                        </ul>
                </div>
                :
                <button onClick={handleToggleSideBar} className='btn btn-sm ms-4 my-7 text-lg p-0'>  <FaAlignLeft className='m-0 p-0'/>   </button>
                }
                <Popup   position="center" modal open={(window.innerWidth<1024)&&smallShowModal} onClose={() => {setSmallShowModal(false);}}>
                    {close => (
                    <div className='' style={{ height: '80vh', overflow: 'scroll' }} >
                        <div className=" button px-0 m-1 text-2xl text-primary" onClick={() => {
                            sessionStorage.setItem("showModalstats",false);
                            setSmallShowModal(false);close(); }}>
                            <FaTimesCircle className='mx-0 px-0 self-center hover:text-purple-300'/>
                        </div>
                        <div>                        
                            <div className='mx-auto flex justify-center my-10'>
                                <Logo/>
                            </div>
                        <SmallSideBar clicked={handleClicked} barClass='lg:hidden'/>
                        </div>
                    </div>
                    )}
                </Popup>         
            </div>                    
            <div className="navbar-center  lg:hidden ">
                <ul className='menu menu-horizontal'>
                    <Logo />
                </ul>
            </div>
            {user &&<div className="navbar-center hidden lg:flex items-center   "> 
                        <ul className='menu menu-horizontal '>
                            <h2 className='font-semibold'>Dashboard</h2>
                        </ul>
                    </div>
            }
            <div className="navbar-end  ">
            
                {!user ? <>
                    <div className='me-4' ><Link to="/register"><SubmitBtn type='button' text="signup" clasName="hodle" /></Link></div> 
                    <div className='me-4'><Link to="/login"><SubmitBtn type='button' text="Login" clasName="" /></Link></div> </>
                :
                    <details className='flex dropdown dropdown-end mr-6 bg-primary rounded-md opacity-90'>
                        <summary tabIndex={0} className='flex items-center'> 
                            <FaUserCircle className="text-2xl text-white m-2 "/>
                            <span className='mx-2 text-white' >{user?.name}</span> 
                            <FaCaretDown className=" text-white me-2 "/>
                        </summary>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow-lg bg-white flex items-center'  >
                            <li><button onClick={handleLogout} className='w-100 mx-1 px-10 btn-primary block text-primary font-semibold'> Logout</button></li>
                        </ul>
                    </details> 
                }  
            </div>
        </div>
    </nav>
  )
}




export default Navbar;