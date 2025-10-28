import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"

interface Props {
    name:string;
    imgURL:string[];
    productId:string;
    price:number;
}

function ProductItem({name, productId, imgURL, price}:Props) {

    const item = useContext(ShopContext)

  return (
    <Link to={`/product/${productId}`}>

        <div className="overflow-hidden">
            <img src={imgURL[0]} alt={name} className="hover:scale-110 transition ease-in-out w-full rounded-xl" />
        </div>
        <p className="text-md font-semibold mb-2">{name}</p>
        <p className="text-sm text-gray-600">{item?.currency} {price}</p>

    </Link>
  )
}

export default ProductItem