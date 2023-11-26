import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";







const NavLinks = () => {
  return (<>
    <li className="w-50"><Link to="/register"><FaHome /></Link></li>
    <li className=""><Link to="/register">Register</Link></li>
    <li className=""><Link to="">NavLinks</Link></li>
    </>
  )
}

export default NavLinks;