import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Shop from "./components/Shop";

const Routing = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header logo="KTECH" cartStatus={cart.length} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
