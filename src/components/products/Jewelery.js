import React, { useContext, useEffect, useState } from "react";
import { EshopContext } from "../Context";
import Card from "../Card";

export default function Jewelery() {
  const { products, addToCart } = useContext(EshopContext);


  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    console.log("Products", products);
    setFilterItems(
      products.filter((item) => item.category === "jewelery")
    );
  }, []);

  return (
    <div className="home">
      <h1>Jewelery</h1>

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
