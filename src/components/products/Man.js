import React, { useContext, useState } from "react";
import { EshopContext } from "../Context";
import Card from "../Card";
import { useEffect } from "react";
import axios from "axios";

export default function Man() {
  const { products } = useContext(EshopContext);

  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    console.log("Products", products);
    setFilterItems(
      products.filter((item) => item.category === "men's clothing")
    );
  }, []);

//   console.log("filterItems", filterItems);

  return (
    <div className="home">
      <h1>Men's clothing</h1>

      <div className="home-content">
        {filterItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
