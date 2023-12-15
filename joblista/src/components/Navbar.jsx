import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle, FaTimesCircle } from "react-icons/fa";
import { logoutUser, toggleSideBar } from '../features/user/userSlice';
import SmallSideBar from './SmallSideBar';



                
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
        dispatch(logoutUser("Logged out successfully.."))
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
        <div className="navbar ">
            {/*TITLE */}
            <div className="navbar-start">  
                <button onClick={handleToggleSideBar} className='btn btn-sm ms-4 my-7 text-lg p-0'>  <FaAlignLeft className='m-0 p-0'/>   </button>
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
            <div className="navbar-center  lg:hidden">
                <ul className='menu menu-horizontal'>
                    <Logo />
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex items-center  "> 
                <ul className='menu menu-horizontal'>
                    <h1 className=''>Dashboard</h1>
                </ul>
            </div>
            <div className="navbar-end ">
                <details className='flex dropdown dropdown-end mr-6 bg-primary rounded-md opacity-90'>
                    <summary tabIndex={0} className='flex items-center'> 
                        <FaUserCircle className="text-2xl text-white m-2 "/>
                        <span className='mx-2 text-white' >{user?.name}</span> 
                        <FaCaretDown className=" text-white me-2 "/>
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