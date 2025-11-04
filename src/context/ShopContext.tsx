
import { 
    createContext, 
    useState, 
    useEffect, 
    type ReactNode, 
    useContext
} from "react";


export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

import { products } from "../assets/assets";


export interface ShopContextType {
    currency: string;
    delivery_fee: number;
    cartCount: number;
    cartTotal: number;
    cart: CartItem[];
    products: Product[];
    clearCart: () => void;
    addToCart: (productId: string) => void;
    removeFromCart: (productId: string) => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);



function ShopContextProvider({ children }: { children: ReactNode }) {

    const currency = "$";
    const delivery_fee = 10;
    const [cart, setCart] = useState<CartItem[]>([]);

// Load cart from localStorage on mount
useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
}, []);

// Save cart to localStorage whenever cart changes
useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}, [cart]);

    // Add product to cart with its quantity
    const addToCart = (productId:string) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(item => item.productId === productId);
        
        if (existingItem) {
            // Update quantity for existing item
            existingItem.quantity += 1;
            return [...prevCart];
        } else {
            // Add new item
            return [...prevCart, { productId, quantity: 1 }];
        }
    });
};

    // Remove product from cart
    const removeFromCart = (productId: string) => {
        setCart(prevCart => prevCart.filter(item => item.productId !== productId));
        localStorage.removeItem('shopping-cart')
    };


    // Clear entire cart
    const clearCart = () => {
        setCart([]);
        localStorage.clear()
    };


    // Calculate total items in cart (sum of quantities)
    const cartCount = cart.length;


    // Calculate total cart value
    const cartTotal = cart.reduce((total, cartItem) => {
        const price = products.find(p => p._id === cartItem.productId)?.price || 0;
        return (total + price) * cartItem.quantity ;
    }, 0);

    const contextValue: ShopContextType = {
        products,
        currency,
        delivery_fee,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}
export const useShop = () => useContext(ShopContext);
export default ShopContextProvider;