import Title from "../components/Title"
import { useShop } from "../context/ShopContext"

function Wishlist() {

    const items = useShop()!
    const { wishList, clearWishList } = items

  return (
    <div className="pt-30">
        <Title text1="YOUR" text2="WISHLIST" />

    <p className="cursor-pointer" onClick={() => clearWishList()}>Clar All</p>
        {wishList.map((item) => (
            <div>
                {item.productId}
            </div>
        ))}

    </div>
  )
}

export default Wishlist