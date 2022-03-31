import React, { useContext, useEffect,useState } from "react";
import { EshopContext } from "../Context";
import Card from "../Card";


export default function Woman() {
  const { products} = useContext(EshopContext);

  const [filterItems, setFilterItems] = useState([]);




  useEffect(() => {
    console.log("Products", products);
    setFilterItems(
      products.filter((item) => item.category === "women's clothing")
    );
  }, []);


  return (
    <div className="home">
      <h1>Women's clothing</h1>

      <div className="home-content">
        {filterItems.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
