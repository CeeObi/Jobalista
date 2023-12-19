import React from 'react'
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import { MdQueryStats } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";




const Links = [
{id:1,path:"/",text:"stats",icon:<IoBarChartSharp />,active:false},
{id:2,path:"/all-jobs",text:"all jobs",icon:<MdQueryStats />,active:false},
{id:3,path:"/add-job",text:"add job",icon:<FaWpforms />,active:false},
{id:4,path:"/profile",text:"profile",icon:<ImProfile />,active:false}
    
]



export default Links;