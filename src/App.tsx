import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LogIn from "./pages/LogIn"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Nav from "./components/Nav"
import Error from "./pages/Error"
import { useEffect, useState } from "react"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"

function App() {
  const [searchVisibility, setSearchVisibility] = useState('hidden')
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:'auto'
    });
  }, [location]);

  return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
        <Nav onClickSearch={() => setSearchVisibility('block')} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/collection" 
              element={
                <Collection 
                  onClickClose={() => setSearchVisibility('hidden')} 
                  status={searchVisibility} 
                />
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:category/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
  )
}

export default App