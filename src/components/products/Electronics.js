import React, { useContext, useState,useEffect } from "react";
import { EshopContext } from "../Context";
import Card from "../Card";

export default function Electronics() {
  const { products, addToCart } = useContext(EshopContext);


  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    console.log("Products", products);
    setFilterItems(
      products.filter((item) => item.category === "electronics")
    );
  }, []);

  return (
    <div className="home">
      <h1>Electronics</h1>

      <div className="home-content">
        {filterItems.map((item) => (
          <Card
            key={item.id}
            item={item}
            cb={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
