import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


function LatestCollection() {

  const products  = useContext(ShopContext)
  
  if (!products) return null
  console.log(products)

  return (
    <div>
      {products.currency} {products.delivery_fee}
    </div>
  )
}

export default LatestCollection