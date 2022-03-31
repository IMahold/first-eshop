import { createContext, useState } from "react";


export const EshopContext = createContext();

export default function EshopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  const loadProducts = array => setProducts([...array])
  
  const addToCart = item =>{
    console.log("Item !!!", item);
    setCart([...cart,item])}


  return <EshopContext.Provider value={{products, loadProducts, cart, addToCart}}>{children}</EshopContext.Provider>;
}
