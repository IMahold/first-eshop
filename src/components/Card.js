import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { EshopContext } from "./Context";

export default function Card({ item}) {

  const {addToCart} = useContext(EshopContext)

  return (
    <div className="card-container">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <h2 className="card-title">{item.title}</h2>
      <p className="card-price">{item.price + "$"}<FaShoppingCart onClick={() => addToCart(item.id)} className="shop-cart" /></p>
     
    </div>
  );
}
