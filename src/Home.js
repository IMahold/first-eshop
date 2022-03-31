import axios from "axios";
import { useContext, useEffect } from "react";
import { EshopContext } from "./components/Context";
import Card from "./components/Card";

export default function Home() {
  const { products, loadProducts,addToCart } = useContext(EshopContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Response is ", response.data);

        loadProducts(response.data);
      } catch (error) {
        console.log("Get data Error", error.message);
      }
    };

    getData();
  }, []);

  return (
    <div className="home">
    
        <h1 className="on-sale">ON SALE</h1>

    

      <div className="home-content">
        {products.map((item) => (
          <Card key={item.id} item={item} cb={addToCart} />
        ))}
      </div>
    </div>
  );
}

