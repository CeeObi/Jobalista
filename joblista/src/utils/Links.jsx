import React from 'react'
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import { MdQueryStats } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";




const Links = [
{id:1,link:"/",text:"stats",icon:<IoBarChartSharp />},
{id:2,link:"/all-jobs",text:"all jobs",icon:<MdQueryStats />},
{id:3,link:"/add-job",text:"add job",icon:<FaWpforms />},
{id:4,link:"/profile",text:"profile",icon:<ImProfile />}
    
]



export default Links;