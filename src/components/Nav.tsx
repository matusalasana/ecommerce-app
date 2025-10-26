
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

function Nav() {
  return (
    <nav className='flex justify-between items-center px-'>
        <img src = {logo} alt="logo" className='w-' />
        <div className='navlinks hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to={'/'} className = "flex flex-col items-center gap-1" >
                <p>Home</p>
                <hr className=' w-2/4 h-0.5 bg-gray-700 hidden' />
            </NavLink>

            <NavLink to={'/collection'} className = "flex flex-col items-center gap-1" >
                <p>Collection</p>
                <hr className=' w-2/4 h-0.5 bg-gray-700 hidden' />
            </NavLink>

            <NavLink to={'/about'} className = "flex flex-col items-center gap-1" >
                <p>About</p>
                <hr className=' w-2/4 h-0.5 bg-gray-700 hidden' />
            </NavLink>

            <NavLink to={'/contact'} className = "flex flex-col items-center gap-1" >
                <p>Contact</p>
                <hr className=' w-2/4 h-0.5 bg-gray-700 hidden' />
            </NavLink>

        </div>
    </nav>
  )
}

export default Nav