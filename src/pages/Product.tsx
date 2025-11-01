
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import ratingIcon from '../assets/star_icon.png'
import blurRatingIcon from '../assets/star_dull_icon.png'
import Footer from "../components/Footer"
import Reviews from "../components/Reviews"
import ProductItem from "../components/ProductItem"
import Title from "../components/Title"


function Product() {

  const items = useContext(ShopContext)
  const {productId} = useParams();
  const {category} = useParams()
  console.log(category)

  return (
    <div className="pt-30">

        {items?.products.filter(item=>item._id === productId).map((product)=>(
          <div className="flex flex-row max-sm:flex-col justify-center items-center flex-warp gap-10">

            <div className="px-10">
              <img src={product.image[0]} alt={product.name} className="rounded-md w-full" />
            </div>

            <div className="px-10">
              <p className="text-2xl font-semibold">{product.name}</p>
              <div className="flex gap-2">
                <img src={ratingIcon} alt="rating icon" className="w-4 h-4"/>
                <img src={ratingIcon} alt="rating icon" className="w-4 h-4"/>
                <img src={ratingIcon} alt="rating icon" className="w-4 h-4"/>
                <img src={ratingIcon} alt="rating icon" className="w-4 h-4"/>
                <img src={blurRatingIcon} alt="rating icon" className="w-4 h-4"/>
                <p className="text-gray-600 ml-1 text-sm">(122)</p>
              </div>
              <p className="text-3xl font-semibold my-5">{items.currency}{product.price}</p>
              <p className="text-sm text-gray-600 w-xs">{product.description}</p>
              <p className="mt-7 font-semibold">Select Size</p>
              <div className="flex flex-row gap-4 mt-3">
                {product.sizes.map((size)=>(
                  <p className="border border-gray-300 px-3 py-1 bg-gray-200">{size}</p>
                ))}
              </div>
              <button 
                onClick={()=>items.addToCart(product._id)}
                className="
                bg-orange-600 
                my-7 
                text-white 
                px-3 py-2 
                rounded-md 
                hover:bg-orange-700 
                cursor-pointer"
              >
                ADD TO CART
              </button>
              <hr className="h-px border-none bg-gray-300"/>
              <p className="mt-5 text-sm text-gray-600 w-xs">100% Original product.</p>
              <p className="text-sm text-gray-600 w-xs">Cash on delivery is available on this product.</p>
              <p className="text-sm text-gray-600 w-xs">Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        ))}
      <Reviews/>
      <div className="mt-10">
        <Title text1="RELATED" text2="PRODUCTS"/>
        <div className="grid base:grid-cols-2 max-sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
          {items?.products.filter(item=>item.category == category).filter(i=>i._id!==productId).map((product)=>(
            <div>
              <ProductItem name={product.name} productId={product._id} imgURL={product.image} price={product.price} category={product.category}/>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product