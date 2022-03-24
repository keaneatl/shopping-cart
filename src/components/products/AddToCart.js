import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AddToCart = ({
  name,
  price,
  amount,
  id,
  onAdd,
  onLessen,
  onAddToCart,
}) => {
  return (
    <div>
      <p className="product-name">{name}</p>
      <p className="product-price">${price}</p>
      <button type="button" onClick={() => onLessen(id)}>
        <AiOutlineMinus />
      </button>
      <span className="quantity">{amount}</span>
      <button type="button" onClick={() => onAdd(id)}>
        <AiOutlinePlus />
      </button>
      <button type="button" onClick={(name) => onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
