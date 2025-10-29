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
      <div className="rounded-xl shadow-md shadow-black p-1">
        <div className="overflow-hidden">
            <img src={imgURL[0]} alt={name} className="hover:scale-110 transition ease-in-out w-full rounded-xl" />
        </div>
        <p className="text-md font-semibold mb-2">{name}</p>
        <p className="text-md text-center">{item?.currency} {price}</p>
        <div className="flex justify-center">
          <button className="bg-orange-600 text-white font-semibold px-5 py-1 rounded-xl cursor-pointer hover:bg-orange-700 mt-7 center">Buy now</button>
        </div>
      </div>

    </Link>
  )
}

export default ProductItem