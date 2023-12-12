import React, { useEffect } from 'react'
import { FaAlignLeft, FaHome } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Links from "../utils/Links";
import { useState } from "react";
import LinkButton from './LinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedId } from '../features/user/userSlice';


const getCurrSelId = () => {
    const currSelctId = localStorage.getItem("currSelId")
    return currSelctId
}



const NavLinks = ({clicked}) => {
    const {currentlySelectedId}= useSelector((state)=>state.userStore)
    const dispatch = useDispatch()
    const handleActive = (e) => {    
        const currId = e.currentTarget.id
        dispatch(updateSelectedId({currId})) 
        clicked()        
    }
  
  return (<div className="">
              <div  className="mx-auto items-center grid row-auto" >
                {Links.map((eachLink) => {
                    const {id,path,icon,text} = eachLink  
                    return <NavLink key={id} id={id} to={path} className={`flex justify-center btn btn-md btn-primary btn-active ${currentlySelectedId===String(id) && "btn-outline"}  my-3 hover:transform hover:translate-x-3 `} onClick={handleActive} end>
                                <div className="mx-auto flex justify-center my-0 py-2">
                                    <div className=" my-0 py-0">
                                        {icon}
                                    </div>    
                                    <div className="mx-2 capitalize my-0 py-0">{text}</div>
                                </div> 
                            </NavLink>                       
                    })
                }
              </div>
          </div>)
}





export default NavLinks;