import Title from "../components/Title"
import { useShop } from "../context/ShopContext"

function Wishlist() {

    const items = useShop()!
    const { wishList, clearWishList, removeFromWishList } = items

  return (
    <div className="pt-30">
        <Title text1="YOUR" text2="WISHLIST" />

    <p className="cursor-pointer" onClick={() => clearWishList()}>Clar All</p>
        {wishList.map((item) => (
            <div className="flex px-5 gap-10">
                {item.productId} <p onClick={ () => removeFromWishList(item.productId) } className="text-red-400 hover:text-red-500 cursor-pointer font-bold">Delete</p>
            </div>
        ))}

    </div>
  )
}

export default Wishlist