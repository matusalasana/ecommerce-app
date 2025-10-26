import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import LogIn from "./pages/LogIn"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Nav from "./components/Nav"


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/collection" element = {<Collection/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/product/:productId" element = {<Products/>} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path="/login" element = {<LogIn/>} />
        <Route path="/place-order" element = {<PlaceOrder/>} />
        <Route path="/orders" element = {<Orders/>} />
      </Routes>
    </div>
  )
}

export default App