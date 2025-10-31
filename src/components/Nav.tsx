
import { Link, NavLink } from 'react-router-dom'
import smLogo from '../assets/sm logo.svg'
import storeLogo from '../assets/store logo.svg'
import { BsSearch } from 'react-icons/bs'
import { CgClose, CgProfile } from 'react-icons/cg'
import { BiCart, BiMenu } from 'react-icons/bi'
import { useState } from 'react'

interface Props{
    onClickSearch:()=>void
}

function Nav({onClickSearch}:Props) {

    const [visibility, setVisibility] = useState(false)

  return (
    <nav className='flex justify-between items-center px-5 py-8 fixed bg-white w-full z-10'>
        <Link to={'/'}>
            <img src = {smLogo} alt="logo" className='max-sm:w-20 mb-px' />
            <img src = {storeLogo} alt="logo" className='max-sm:w-[78px] w-[95px]' />
        </Link>
        <div className='hidden sm:flex gap-5 text-sm text-gray-700'>
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

            <Link to={'/collection'}>
                <BsSearch onClick={onClickSearch} fontSize={'20px'} />
            </Link>

            <div className='group relative'>
                <Link to={'/login'}><CgProfile fontSize={'25px'} /></Link>
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

        <div 
            className={`
            h-screen
            absolute 
            top-0 
            right-0 
            bottom-0 
            overflow-hidden 
            bg-white 
            transition-all 
            ${visibility ? 'w-[40vw]' : 'w-0'}`}
        >
            <div className='flex flex-col gap-1 text-gray-600 p-3'>
                <div onClick={()=> setVisibility(false)} className='flex items-center py-2 gap-4'>
                    <CgClose fontSize={25} color='red' className='rounded-md '/>
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