import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header logo="KTECH" />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
