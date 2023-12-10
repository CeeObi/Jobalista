import { FaAlignLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";








const NavLinks = () => {
  return (
<div className="">
    <div>
        <div className=" btn text-center my-10"><Link to="/register"><FaHome  /> <span className="mx-5">Home</span></Link></div>
    </div>
    <div>
        <div className=" btn text-center my-10"><Link to="/register"><FaHome  /> <span className="mx-5">Home</span></Link></div>
    </div>
    <div>
        <div className=" btn text-center my-10"><Link to="/register"><FaHome  /> <span className="mx-5">Home</span></Link></div>
    </div>
</div>
  )
}

export default NavLinks;