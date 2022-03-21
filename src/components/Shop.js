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

const Shop = ({ cart, setCart }) => {
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
  console.log(products);
  const onQuantityAdd = () => {};

  const onQuantityRemove = () => {};

  const onClick = (product, id) => {
    setCart(
      cart.concat({
        name: product,
        ID: id,
        quantity: 0,
      })
    );
    console.log(cart);
  };

  const onInput = (e) => {
    setCart(
      cart.map((item) => {
        if (item.id === e.currentTarget.inputID) {
          item.quantity = e.target.value;
        }
        console.log(item);
        return item;
      })
    );
  };
  return (
    <div className="products">
      {products.map((product, i) => (
        <ProductCard
          name={product.name}
          price={product.price}
          src={productImages[i]}
          key={product.id}
          inputid={product.id}
          onQuantityAdd={onQuantityAdd}
          onQuantityRemove={onQuantityRemove}
        />
      ))}
    </div>
  );
};

export default Shop;
