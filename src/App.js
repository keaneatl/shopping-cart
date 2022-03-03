import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import earphones from "./assets/earphones.png";
import headset1 from "./assets/headset1.png";
import headset2 from "./assets/headset2.png";
import laptop1 from "./assets/laptop1.png";
import laptop2 from "./assets/laptop2.png";
import laptop3 from "./assets/laptop3.png";
import phone1 from "./assets/phone1.png";
import phone2 from "./assets/phone2.png";
import phone3 from "./assets/phone3.png";
import printer1 from "./assets/printer1.png";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Wired In-Ear Earphones",
      price: "$6.99",
      src: earphones,
      id: 0,
    },
    {
      name: "Bluetooth Headset w/ Built-in Microphone",
      price: "$45",
      src: headset1,
      id: 1,
    },
    {
      name: "Wireless Headphones w/ Built-in Microphone",
      price: "$31.99",
      src: headset2,
      id: 2,
    },
    {
      name: "Tracer Transpire 3 A675 | 15.6 in Full HD IPS Display | Cinetel Core 3 3250U Quad-Core  Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | Windux 11 Home",
      price: "$476.99",
      src: laptop1,
      id: 3,
    },
    {
      name: "EtchP 2022 14in Ultra Thin Laptop, Cinetel N3020 Processor(Up to 2.8GHz), 8GB RAM, 128GB Storage(64GB eMMC+64GB Micro SD), 1 Year Office 364, Webcam, HDMI, WiFi, USB-A&C",
      price: "$399",
      src: laptop2,
      id: 4,
    },
    {
      name: "Watermelon WacBook Wind 13.3-Inch Laptop (Intel Core i5 Dual-Core 1.3GHz up to 2.6GHz, 4GB RAM, 128GB SSD, Wi-Fi, Bluetooth 4.0) ",
      price: "$705",
      src: laptop3,
      id: 5,
    },
    {
      name: "Datwei X70 Prime 2022 512GB 8GB RM Dual Sim Factory Unlocked",
      price: "$1266.99",
      src: phone1,
      id: 6,
    },
    {
      name: "Samsam Solar V12 (G135M) 64GB Dual SIM, GSM Unlocked",
      price: "$189",
      src: phone2,
      id: 7,
    },
    {
      name: "Watermelon Lphone 7 32GB GSM Unlocked (Silver)",
      price: "$165",
      src: phone3,
      id: 8,
    },
    {
      name: "Bolt Sugma VX4260 Wireless All-In-One Color Inkjet Printer with Mobile and Tablet Printing, Black",
      price: "$89.99",
      src: printer1,
      id: 9,
    },
  ]);
  return (
    <div className="App">
      <Header logo="KTECH" />
      <MainPage products={products} />
    </div>
  );
}

export default App;
