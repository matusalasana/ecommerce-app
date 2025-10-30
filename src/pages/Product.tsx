
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import ratingIcon from '../assets/star_icon.png'
import blurRatingIcon from '../assets/star_dull_icon.png'


function Product() {

  const items = useContext(ShopContext)
  const {productId} = useParams();
  console.log(productId)

  return (
    <div className="pt-30">

        {items?.products.filter(item=>item._id === productId).map((product)=>(
          <div className="flex flex-col flex-warp">

            <div>
              <img src={product.image[0]} alt={product.name} />
            </div>

            <div>
              <p className="text-2xl font-semibold">{product.name}</p>
              <div className="flex gap-2 w-sm">
                <img src={ratingIcon} alt="rating icon" />
                <img src={ratingIcon} alt="rating icon" />
                <img src={ratingIcon} alt="rating icon" />
                <img src={ratingIcon} alt="rating icon" />
                <img src={blurRatingIcon} alt="rating icon" />
                <p className="text-gray-600 ml-2">(122)</p>
              </div>
            </div>
          </div>
        ))}

    </div>
  )
}

export default Product