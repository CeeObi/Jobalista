import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const LinkButton = ( {id,link,icon,text}) => {
    const [activeBtn, setActive] = useState()

    useEffect(() => {
        const selectdId =localStorage.getItem("selctdId")
        const sId = String(id)
        if (sId === selectdId){
            setActive(true)
        }
    },[activeBtn])



  const handleActiveButton = (e) => {        
        const curId = e.currentTarget.id
        localStorage.setItem("selctdId",curId)        
        setActive(true)

    }
  return (
        <Link to={link} className="flex justify-center">
            <button id={id}   className={`flex justify-center btn btn-md btn-primary btn-active ${activeBtn && "btn-outline"}  my-3 hover:transform hover:translate-x-3 `} onClick={handleActiveButton}>
                
                    <div className="mx-auto flex justify-center my-0 py-2">
                        <div className=" my-0 py-0">
                            {icon}
                        </div>    
                        <div className="mx-2 capitalize my-0 py-0">{text}</div>
                    </div>                
            </button>
        </Link>
  )
}

export default LinkButton;