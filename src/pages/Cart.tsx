import { useContext, useState, useEffect } from "react"
import CartBox from "../components/CartBox"
import CartTotals from "../components/CartTotals"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

function Cart() {
  const items = useContext(ShopContext)
  const [subTotal, setSubTotal] = useState<number>(0)

  // Get cart products with quantities - UPDATED for new cart structure
  const cartProducts = (items?.cart.map(cartItem => {
    const product = items.products.find(p => p._id === cartItem.productId)
    return product ? { 
      ...product, 
      quantity: cartItem.quantity,
      cartItemId: cartItem.productId // Keep the original ID for removal
    } : null
  }).filter(Boolean) as any[]) || []

  // Calculate subtotal whenever cart changes - UPDATED for quantities
  useEffect(() => {
    if (cartProducts.length > 0) {
      const total = cartProducts.reduce((sum, product) => {
        return sum + (product.price * product.quantity)
      }, 0)
      setSubTotal(total)
    } else {
      setSubTotal(0)
    }
  }, [cartProducts])

  const handleRemove = (id: string) => {
    if (items?.removeFromCart) {
      items.removeFromCart(id)
    } else {
      console.warn("removeFromCart not implemented in ShopContext")
    }
  }

  // NEW: Handle quantity updates
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (items?.updateQuantity) {
      items.updateQuantity(productId, newQuantity)
    } else {
      console.warn("updateQuantity not implemented in ShopContext")
    }
  }

  const shippingFee = items?.delivery_fee || 10
  const totalPrice = subTotal + shippingFee

  // Show empty cart message
  if (cartProducts.length === 0) {
    return (
      <div className="pt-30 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Title text1="YOUR" text2="CART" />
          <p className="text-gray-500 text-lg mt-4">Your cart is empty</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-30 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Title text1="YOUR" text2="CART" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map((product) => (
              <CartBox
                category={product.category}
                key={product._id}
                name={product.name}
                price={product.price}
                imgURL={product.image}
                productId={product._id}
                removeCart={handleRemove}
                quantity={product.quantity} // FIXED: Now uses actual quantity
                updateQuantity={handleQuantityChange} // NEW: Pass quantity update function
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartTotals 
              subTotal={subTotal}
              currency={items?.currency || '$'}
              totalPrice={totalPrice}
              shippingFee={shippingFee}
              itemCount={items?.cartCount || 0} // NEW: Show total item count
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart