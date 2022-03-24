import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AddToCart = ({ name, price, amount, onAdd, onLessen, onAddToCart }) => {
  return (
    <div>
      <p className="product-name">{name}</p>
      <p className="product-price">${price}</p>
      <button type="button" onAdd={onAdd}>
        <AiOutlinePlus />
      </button>
      <p className="quantity">{amount}</p>
      <button type="button" onLessen={onLessen}>
        <AiOutlineMinus />
      </button>
      <button type="button" onAddToCart={(name) => onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
