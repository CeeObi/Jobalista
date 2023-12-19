import {FaBarsStaggered} from 'react-icons/fa6';
import NavLinks from './NavLinks';




const DropDown = () => {
  return (
    <details className="dropdown dropdown-end lg:hidden mr-2">
        <summary tabIndex={0} className='btn btn-ghost btn-sm '>
            <FaBarsStaggered className="h-5 w-5" />
        </summary>
        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-30 flex items-center'>
            <NavLinks />
        </ul>
    </details>
  )
}

export default DropDown;