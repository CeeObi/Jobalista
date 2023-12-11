import { FaAlignLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Links from "../utils/Links";
import { useState } from "react";



const NavLinks = () => {
  const [activeBtn, setActive] = useState(false)

  const handleActiveButton = () => {
        setActive(true)


  }
  return (<div className="">
              {Links.map((eachLink) => {
                const {id,link,icon,text} = eachLink 
                return  <div className="flex mx-auto justify-center" >
                          <button key={id} className={` items-center btn btn-md btn-primary btn-active ${activeBtn && "btn-outline"}  my-3 hover:transform hover:translate-x-3 `} onClick={handleActiveButton}>
                            <Link to={link}>
                                <div className="flex  my-0 py-2">
                                    <div className=" my-0 py-0">
                                        {icon}
                                    </div>    
                                    <div className="mx-2 capitalize my-0 py-0">{text}</div>
                                </div>
                            </Link>
                          </button>
                        </div>
              })
          }
          </div>)
}





export default NavLinks;