
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { BsSearch } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { BiCart, BiMenu } from 'react-icons/bi'
import { useState } from 'react'
import { FcLeft } from 'react-icons/fc'

function Nav() {

    const [visibility, setVisibility] = useState(false)

  return (
    <nav className='flex justify-between items-center px-5 py-8'>
        <img src = {logo} alt="logo" className='w-20' />
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

        <div className='flex items-center gap-6'>

            <BsSearch fontSize={'20px'} />

            <div className='group relative'>
                <CgProfile fontSize={'25px'} />
                <div 
                    className='
                        absolute 
                        right-0 
                        py-5 
                        px-5 
                        w-25
                        rounded
                        dropdown-menu 
                        hidden
                        group-hover:block 
                        bg-slate-200 
                        text-slate-500'
                >
                    <p className='cursor-pointer hover:text-black'>Profile</p>
                    <p className='cursor-pointer hover:text-black'>Order</p>
                    <p className='cursor-pointer hover:text-black'>Log out</p>
                </div>
            </div>

            <Link to="/cart" className='relative'>
                <BiCart fontSize={'35px'} />
                <p 
                    className='
                        absolute 
                        right-[-5px] 
                        bottom-[-5px] 
                        w-4
                        text-center
                        leading-4
                        bg-black 
                        text-white 
                        aspect-square
                        font-semibold 
                        rounded-full 
                        text-[8px] '
                >10</p>
            </Link>

            <BiMenu 
                onClick={()=>setVisibility(true)} 
                className="cursor-pointer block sm:hidden " 
                fontSize={'25px'} 
            />

        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visibility ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col gap-1 text-gray-600 p-3'>
                <div onClick={()=> setVisibility(false)} className='flex items-center py-2 gap-4'>
                    <FcLeft style={{fontSize:'20px', color:'black'}} />
                    <p className='font-bold'>Back</p>
                </div>
                <div 
                    className='
                        flex 
                        flex-col 
                        justify-center 
                        items-center 
                        gap-4 
                        mt-10
                        
                        text-xl
                        text-gray-600
            '
                >
                    <NavLink to={'/'}>
                        <p className='sm-device-menu'>Home</p>
                    </NavLink>
                    <NavLink to={'/collection'} >
                        <p className='sm-device-menu'>Collection</p>
                    </NavLink>
                    <NavLink to={'/about'} >
                        <p className='sm-device-menu'>About</p>
                    </NavLink>
                    <NavLink to={'/contact'} >
                        <p className='sm-device-menu'>Contact</p>
                    </NavLink>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Nav