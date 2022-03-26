import React from "react";
import CartItem from "./CartItem";
import earphones from "../../assets/images/earphones.png";
import headset1 from "../../assets/images/headset1.png";
import headset2 from "../../assets/images/headset2.png";
import laptop1 from "../../assets/images/laptop1.png";
import laptop2 from "../../assets/images/laptop2.png";
import laptop3 from "../../assets/images/laptop3.png";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import phone3 from "../../assets/images/phone3.png";
import printer1 from "../../assets/images/printer1.png";

const Cart = ({ cart }) => {
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
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length > 0
        ? cart.map((item) => {
            return (
              <CartItem
                name={item.name}
                amount={item.amount}
                image={productImages[item.thumbnailID]}
                key={item.id}
              />
            );
          })
        : "You have no items in your cart."}
    </div>
  );
};

export default Cart;
