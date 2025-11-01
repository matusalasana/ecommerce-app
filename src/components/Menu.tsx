import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CgClose, CgProfile } from "react-icons/cg"
import { BiCart, BiHome, BiCollection, BiUser, BiPhone } from "react-icons/bi"
import { FiHeart, FiShoppingBag, FiInfo, FiMail } from "react-icons/fi"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const items = useContext(ShopContext)

  const menuItems = [
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

  const isActivePath = (path: string) => location.pathname === path

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
      >
        {/* Menu Panel */}
        <div 
          className={`
            absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">SMstore</div>
                <div className="text-xs text-gray-500">Welcome back!</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <CgClose size={24} />
            </button>
          </div>

          {/* Scrollable Menu Content */}
          <div className="h-full overflow-y-auto pb-20">
            
            {/* Main Navigation */}
            <div className="p-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</h3>
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive = isActivePath(item.path)
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }
                      `}
                    >
                      <Icon 
                        className={`w-5 h-5 transition-colors ${
                          isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                        }`} 
                      />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Account Section */}
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Account</h3>
              <div className="space-y-2">
                {accountItems.map((item) => {
                  const Icon = item.icon
                  const isActive = isActivePath(item.path)
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }
                      `}
                    >
                      <Icon 
                        className={`w-5 h-5 transition-colors ${
                          isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                        }`} 
                      />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                >
                  <div className="relative">
                    <BiCart className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    {items?.cartCount && items.cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-5 h-5 flex items-center justify-center rounded-full px-1">
                        {items.cartCount > 99 ? '99+' : items.cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium">Cart</span>
                </Link>

                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                >
                  <BiUser className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium">Login</span>
                </Link>
              </div>
            </div>

            {/* Support Section */}
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Support</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+251945807386"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <BiPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Call Support</div>
                    <div className="text-sm text-gray-500">+251-945807386</div>
                  </div>
                </a>

                <a 
                  href="mailto:matusalasana@gmail.com"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FiMail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-gray-500">matusalasana@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-600">
                © 2024 SMstore
              </div>
              <div className="flex gap-4">
                <Link to="/privacy" className="text-gray-500 hover:text-gray-700">Privacy</Link>
                <Link to="/terms" className="text-gray-500 hover:text-gray-700">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu