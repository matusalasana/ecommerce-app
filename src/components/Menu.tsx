import { useState } from "react"
import { Link } from "react-router-dom"
import { CgClose, CgProfile } from "react-icons/cg"
import { BiCart, BiHome, BiCollection, BiPhone } from "react-icons/bi"
import { FiHeart, FiShoppingBag, FiInfo } from "react-icons/fi"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Phone } from "lucide-react"

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const items = useContext(ShopContext)

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


  return (
    <>
      <div className="flex flex-col gap-5 fixed top-0 right-0 z-50 h-screen overflow-y-scroll bg-white w-80 px-5 py-10">


        <div className="flex justify-between items-center static">
          <div className="flex gap-3">
            <p className="bg-indigo-600 text-white font-semibold w-12 h-12 flex items-center justify-center rounded-2xl">SM</p>
            <div>
              <p className="font-bold">Sana Matusala</p>
              <p className="text-gray-600">Welcome back!</p>
            </div>
          </div>
          <CgClose size={25} className="hover:text-gray-700 text-gray-500 cursor-pointer" />
        </div>
        <hr className="border-gray-300" />


        <div className="flex flex-col gap-5">
          <p className="text-gray-600 font-semibold mt-5">NAVIGATION</p>
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            return (
                <Link to={item.path} key={index} className="flex items-center gap-3 text-gray-700 font-semibold hover:text-blue-600">
                  <Icon size={20} />
                  <p className="bb">{item.label}</p>
                </Link>
            )
          })}
        </div>


        <div className="flex flex-col gap-5">
          <p className="text-gray-600 font-semibold mt-5">ACCOUNT</p>
            {accountItems.map((item) => {

              const Icon = item.icon

              return (
                <Link to = {item.path} className="flex items-center gap-3 text-gray-700 font-semibold hover:text-blue-600" >
                  <Icon size={20} />
                  <p>{item.label}</p>
                </Link>
              )
            })}
        </div>


        <div className="flex flex-col gap-5">
            <p className="text-gray-600 font-semibold mt-5">QUICK ACTIONS</p>
                <Link to={'/cart'} className="relative flex items-center gap-3 text-gray-700 font-semibold hover:text-blue-600">
                  <BiCart size={30} />
                  <p >Cart</p>
                  <p className="absolute -bottom-1 left-4 bg-red-600 text-center leading-4 w-4 h-4 font-semibold text-white text-[12px] rounded-full">{items?.cartCount}</p>
                </Link>
        </div>


        <div className="flex flex-col gap-5">
          <p className="text-gray-600 font-semibold mt-5">SUPPORT</p>
          <div className="flex items-center gap-3 cursor-pointer">
            <Phone color="green" className="bg-gray-300 w-10 h-10 p-2"/>
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