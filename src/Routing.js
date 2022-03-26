import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart/Cart";
import Header from "./components/Header";
import Shop from "./components/Shop";

const Routing = () => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (item) => {
    if (cart.some((product) => product.id === item.id)) {
      alert("You already have this item in your cart!");
    } else if (item.amount === 0) {
      return;
    } else setCart((items) => [...items, item]);
  };

  return (
    <BrowserRouter>
      <Header logo="KTECH" cartStatus={cart.length} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop onAddToCart={onAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
