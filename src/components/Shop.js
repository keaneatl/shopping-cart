import { useState } from "react";
import ProductCard from "./products/ProductCard";
import Products from "../assets/products.json";
import { useEffect } from "react";
import earphones from "../assets/images/earphones.png";
import headset1 from "../assets/images/headset1.png";
import headset2 from "../assets/images/headset2.png";
import laptop1 from "../assets/images/laptop1.png";
import laptop2 from "../assets/images/laptop2.png";
import laptop3 from "../assets/images/laptop3.png";
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";
import phone3 from "../assets/images/phone3.png";
import printer1 from "../assets/images/printer1.png";

const Shop = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const productImages = [
    earphones,
    headset1,
    headset2,
    laptop1,
    laptop2,
    laptop3,
    phone1,
    phone2,
    phone3,
    printer1,
  ];

  useEffect(() => {
    const data = Object.values(Products);
    setProducts(data);
  }, []);

  const onAdd = (itemID) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === itemID) {
          prod.amount = prod.amount + 1;
          return prod;
        } else return prod;
      })
    );
  };

  const onLessen = (itemID) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === itemID && prod.amount > 0) {
          prod.amount = prod.amount - 1;
          return prod;
        } else return prod;
      })
    );
  };

  return (
    <div className="products">
      {products.map((product, i) => (
        <ProductCard
          name={product.name}
          price={product.price}
          amount={product.amount}
          id={product.id}
          productImg={productImages[i]}
          key={product.id}
          onAdd={onAdd}
          onLessen={onLessen}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
