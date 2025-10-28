import { createContext, type ReactNode } from "react";
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

export interface ShopContextType {
    currency: string;
    delivery_fee: number;
    products: Product[];
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);


function ShopContextProvider({ children }: { children: ReactNode }) {

    const currency = "$";
    const delivery_fee = 10;

    const items: ShopContextType = { products, currency, delivery_fee }

    return (
        <ShopContext.Provider value={items} >
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider