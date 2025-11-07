import { Link, useLocation } from "react-router-dom"
import { CgClose, CgProfile } from "react-icons/cg"
import { BiCart, BiHome, BiCollection, BiPhone, BiUser } from "react-icons/bi"
import { FiHeart, FiShoppingBag, FiInfo } from "react-icons/fi"
import { MenuIcon, Phone } from "lucide-react"
import { useState } from "react"

function Menu() {

  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Home", icon: BiHome },
    { path: "/collection", label: "Collection", icon: BiCollection },
    { path: "/about", label: "About", icon: FiInfo },
    { path: "/contact", label: "Contact", icon: BiPhone },
  ]

  const accountItems = [
    { path: "/profile", label: "Profile", icon: CgProfile },
    { path: "/wishlist", label: "Wishlist", icon: FiHeart },
    { path: "/orders", label: "Orders", icon: FiShoppingBag },
  ]

  const quickActionItems = [
    { path: "/cart", label: "Cart", icon: BiCart },
    { path: "/login", label: "Login", icon: BiUser },
  ]

  const [isOpen, setIsOpen] = useState('hidden');


  return (
    <>
    <MenuIcon onClick={() => setIsOpen('block')} />
      <div className = {`${isOpen} flex flex-col gap-5 fixed top-0 right-0 z-50 h-screen overflow-y-scroll bg-white w-80 px-5 py-10`}>


        <div className="flex justify-between items-center static">
          <div className="flex gap-3">
            <p className="bg-indigo-600 text-white font-semibold w-12 h-12 flex items-center justify-center rounded-2xl">SM</p>
            <div>
              <p className="font-bold">Sana Matusala</p>
              <p className="text-gray-600">Welcome back!</p>
            </div>
          </div>
          <CgClose onClick={() => setIsOpen('hidden')} size={25} className="hover:text-gray-700 text-gray-500 cursor-pointer" />
        </div>
        <hr className="border-gray-300" />


        <div className="flex flex-col gap-3">
          <p className="text-gray-600 font-semibold mt-5">NAVIGATION</p>
          {navigationItems.map((item, index) => {

            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
                <Link to={item.path} key={index} className={`flex justify-between items-center  font-semibold transition-colors duration-200 p-2 rounded-lg
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' } `}>
                  <div className="flex gap-3">
                    <Icon size={20} />
                    <p className="bb">{item.label}</p>
                  </div>
                  <p className= {`h-2 w-2 bg-blue-400 rounded-full ${isActive ? 'block' : 'hidden'} `}></p>
                </Link>
            )
          })}
        </div>


        <div className="flex flex-col gap-5">
          <p className="text-gray-600 font-semibold mt-5">ACCOUNT</p>
            {accountItems.map((item, index) => {

              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link to={item.path} key={index} className={`flex justify-between items-center  font-semibold transition-colors duration-200 p-2 rounded-lg
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' } `}>
                  <div className="flex gap-3">
                    <Icon size={20} />
                    <p>{item.label}</p>
                  </div>
                  <p className= {`h-2 w-2 bg-blue-400 rounded-full ${isActive ? 'block' : 'hidden'} `}></p>
                </Link>
              )
            })}
        </div>


        <div className="flex flex-col gap-3">
          <p className="text-gray-600 font-semibold mt-5">NAVIGATION</p>
          {quickActionItems.map((item, index) => {

            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
                <Link to={item.path} key={index} className={`flex justify-between items-center  font-semibold transition-colors duration-200 p-2 rounded-lg
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' } `}>
                  <div className="flex gap-3">
                    <Icon size={20} />
                    <p className="bb">{item.label}</p>
                  </div>
                  <p className= {`h-2 w-2 bg-blue-400 rounded-full ${isActive ? 'block' : 'hidden'} `}></p>
                </Link>
            )
          })}
        </div>


        <div className="flex flex-col gap-5">
          <p className="text-gray-600 font-semibold mt-5">SUPPORT</p>
          <div className="flex items-center gap-3 cursor-pointer">
            <Phone color="green" className="bg-gray-100 w-10 h-10 p-2 rounded-lg"/>
            <div>
              <p className="text-gray-700 font-semibold">Call Support</p>
              <p className="text-gray-700">+251-945807386</p>
            </div>
          </div>
        </div>


      </div>   
    </>
  )
}

export default Menu