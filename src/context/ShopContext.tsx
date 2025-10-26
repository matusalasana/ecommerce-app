import { createContext, type ReactNode } from "react";
import Products from "../pages/Products";

export interface ShopContextType {
    currency: string;
    delivery_fee: number;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);


function ShopContextProvider({ children }: { children: ReactNode }) {

    const currency = "$";
    const delivery_fee = 10;

    const items = { Products, currency, delivery_fee }


    return (
        <ShopContext.Provider value={items} >
            {children}

           
        </ShopContext.Provider>
    )
}

export default ShopContextProvider