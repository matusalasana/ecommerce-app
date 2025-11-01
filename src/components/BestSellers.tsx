import { useContext, useEffect, useState } from "react"
import { ShopContext, type Product } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"


function BestSellers() {

  const items  = useContext(ShopContext)
  
  if (!items) return null
  console.log(items)

  const [latestProducts, setLatestProducts] = useState<Product[]>()

  useEffect(() => {
    setLatestProducts(items.products)
  },[])

  return (
    <div className="mb-10 mt-40 max-sm:px-10 md:px-15 lg:px-20 xl:px-30">

      <div className="mb-15">
        <Title text1={"BEST"} text2={"SELLERS"} />
      <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
        See what everyone's talking about! Our best sellers collection features the products that customers keep coming back for. Quality that's been tried, tested, and adored.
      </p>
      </div>
    
      <div className="grid base:grid-cols-2 max-sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {latestProducts?.map((product, index)=>(
          <>
          { product.bestseller==true &&
          <div>
            <ProductItem name={product.name} price={product.price} key={index} imgURL={product.image} productId={product._id} category={product.category} />
          </div>
          }
          </>
        ))}
      </div>
      
    </div>
  )
}

export default BestSellers