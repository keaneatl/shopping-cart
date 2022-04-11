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
  const onDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <BrowserRouter>
      <Header logo="KTECH" cartStatus={cart.length} />
      <Routes>
        <Route path="/shopping-cart" element={<App />} />
        <Route
          path="/shopping-cart/shop"
          element={<Shop onAddToCart={onAddToCart} />}
        />
        <Route
          path="/shopping-cart/cart"
          element={<Cart cart={cart} onDelete={onDelete} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
