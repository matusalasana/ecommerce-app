
interface CartBoxProps {
  name: string;
  price: number;
  imgURL: string[];
  category: string;
  productId: string;
  removeCart: (id: string) => void;
  quantity: number;
  updateQuantity?:(productId:string, quantity:number)=>void;
}

function CartBox({ name, price, imgURL, category, productId, removeCart, quantity }: CartBoxProps) {
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <img 
        src={imgURL[0]} 
        alt={name}
        className="w-20 h-20 object-cover rounded"
      />
      
      <div className="ml-4 flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 capitalize">{category}</p>
        <p className="text-blue-600 font-semibold">${price}</p>
        <p className="text-sm text-gray-500 bg-gray-100 py-2 border border-gray-200 w-40 mx-auto rounded-lg text-center">Quantity: {quantity}</p>
      </div>
      
      <button 
        onClick={() => removeCart(productId)}
        className="text-red-500 hover:text-red-700 px-3 py-1 border border-red-300 rounded hover:bg-red-50 transition-colors"
      >
        Remove
      </button>
    </div>
  )
}

export default CartBox