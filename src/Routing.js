import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Shop from "./components/Shop";

const Routing = () => {
  const [cart, setCart] = useState([]);
  const onAddToCart = (item) => {
    if (cart.some((product) => product.id === item.id)) {
      alert("You already have this item in your cart!");
    } else setCart((items) => [...items, item]);
  };
  return (
    <BrowserRouter>
      <Header logo="KTECH" cartStatus={cart.length} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop onAddToCart={onAddToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
