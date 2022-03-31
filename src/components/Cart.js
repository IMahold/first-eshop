import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { EshopContext } from "./Context";

export default function Cart() {
  const { cart, products } = useContext(EshopContext);

  const getProductDetails = (id) => {
    const product = products.filter((item) => item.id === id)[0];

    return (
      <div className="cartItem">
        <div className="image-icon">
          <img src={product.image} alt="" />
        </div>
        <div className="cart-title">{product.title}</div>
        <div className="cart-price"> {product.price + "$"}</div>
      </div>
    );
  };

  const getTotal = () => {
    const productsCart = products.filter((item) => cart.includes(item.id));

    console.log("Products in Cart!!!", productsCart);

    return productsCart.reduce((total, item) => total += item.price, 0)
  };

  

  return (
    <div className="cart-container">
      <h2>Your cart</h2>

      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        cart.map((item) => <div key={item.id}>{getProductDetails(item)}</div>)
      )}

      <div>{getTotal()}</div>

      <div>
        <Link to="/">Continue shopping</Link>
      </div>
    </div>
  );
}
