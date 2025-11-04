import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react";

interface Props {
    name: string;
    imgURL: string[];
    productId: string;
    price: number;
    category: string;
}

function ProductItem({ name, productId, imgURL, price, category }: Props) {
    const item = useContext(ShopContext)

    return (
        <Link to={`/product/${category}/${productId}`} className="group block">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <img 
                        src={imgURL[0]} 
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-0 left-0">
                        <span className="bg-gray-100 text-xs font-medium px-3 py-1 rounded-full text-gray-700 capitalize shadow-sm">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="p-4 flex-1 flex flex-col">
                    {/* Product Info */}
                    <div className="flex-1 mb-3">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                            {name}
                        </h3>
                        <p className="text-xl font-bold text-gray-900">
                            {item?.currency || '$'}{price}
                        </p>
                    </div>

                    {/* Action Button */}
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            item?.addToCart(productId);
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                        <ShoppingBag size={20} />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem