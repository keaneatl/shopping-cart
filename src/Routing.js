import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Products from "./components/Products";

const Routing = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Header logo="KTECH" cartStatus={cart.length} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Products cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
