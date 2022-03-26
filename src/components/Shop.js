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
    phone1,
    headset1,
    laptop1,
    laptop2,
    earphones,
    headset2,
    laptop3,
    phone2,
    phone3,
    printer1,
  ];

  useEffect(() => {
    const data = Object.values(Products);
    data.forEach((item, i) => (item.thumbnailID = i));
    setProducts(data);
  }, []);

  const onAmountInput = (itemID, e) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === itemID) {
          if (Number(e.currentTarget.value))
            prod.amount = Number(e.currentTarget.value);
          else prod.amount = e.currentTarget.value;
          return prod;
        } else return prod;
      })
    );
  };

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
    <div className="shop">
      {products.map((product, i) => (
        <ProductCard
          item={product}
          productImg={productImages[i]}
          key={product.id}
          onAdd={onAdd}
          onLessen={onLessen}
          onAddToCart={onAddToCart}
          onAmountInput={onAmountInput}
        />
      ))}
    </div>
  );
};

export default Shop;
