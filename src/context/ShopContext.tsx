import { createContext, useState, useEffect, type ReactNode } from "react";
import { products } from "../assets/assets";

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
    size?: string; // Added for size selection
}

export interface ShopContextType {
    currency: string;
    delivery_fee: number;
    cart: CartItem[]; // Changed to track quantities and sizes
    products: Product[];
    addToCart: (productId: string, size?: string) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    updateQuantity: (productId: string, quantity: number) => void;
    cartCount: number;
    cartTotal: number;
    isInCart: (productId: string) => boolean;
    getProductQuantity: (productId: string) => number;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

function ShopContextProvider({ children }: { children: ReactNode }) {
    const currency = "$";
    const delivery_fee = 10;
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('shopping-cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    }, [cart]);

    // Add product to cart with quantity and size support
    const addToCart = (productId: string, size?: string) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.productId === productId);
            
            if (existingItem) {
                // Increase quantity if item already exists
                return prevCart.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new item to cart
                return [...prevCart, { productId, quantity: 1, size }];
            }
        });
    };

    // Remove product from cart
    const removeFromCart = (productId: string) => {
        setCart(prevCart => prevCart.filter(item => item.productId !== productId));
    };

    // Update product quantity
    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.productId === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Clear entire cart
    const clearCart = () => {
        setCart([]);
    };

    // Check if product is in cart
    const isInCart = (productId: string): boolean => {
        return cart.some(item => item.productId === productId);
    };

    // Get quantity of specific product in cart
    const getProductQuantity = (productId: string): number => {
        const item = cart.find(cartItem => cartItem.productId === productId);
        return item ? item.quantity : 0;
    };

    // Calculate total items in cart (sum of quantities)
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Calculate total cart value
    const cartTotal = cart.reduce((total, cartItem) => {
        const product = products.find(p => p._id === cartItem.productId);
        return total + (product ? product.price * cartItem.quantity : 0);
    }, 0);

    const contextValue: ShopContextType = {
        products,
        currency,
        delivery_fee,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isInCart,
        getProductQuantity
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;