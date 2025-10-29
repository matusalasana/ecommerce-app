import { useContext, useEffect, useState } from "react"
import { ShopContext, type Product } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"


function LatestCollection() {

  const items  = useContext(ShopContext)
  
  if (!items) return null
  console.log(items)

  const [latestProducts, setLatestProducts] = useState<Product[]>()

  useEffect(() => {
    setLatestProducts(items.products)
  },[])

  return (
    <div className="mb-10 mt-20 max-sm:px-10 md:px-15 lg:px-20 xl:px-30">

      <div className="mb-15">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
      <p className="w-[70%] m-auto text-xs sm:text-sm md:text-base text-gray-600">
      Discover the season's most sought-after pieces, carefully curated to keep you ahead of the trends. Fresh styles just landed – shop before they're gone!
      </p>
      </div>

      <div className="grid base:grid-cols-2 max-sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {latestProducts?.slice(0,10).map((product, index)=>(
          <div className="rounded-xl p-1 shadow-md shadow-black">
            <ProductItem name={product.name} price={product.price} key={index} imgURL={product.image} productId={product._id} />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default LatestCollection