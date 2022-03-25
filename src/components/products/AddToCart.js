import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AddToCart = ({ item, onAdd, onLessen, onAddToCart, onAmountInput }) => {
  return (
    <div>
      <button type="button" onClick={() => onLessen(item.id)} className="btn">
        <AiOutlineMinus />
      </button>
      <input
        type="tel"
        value={item.amount}
        className="quantity"
        onChange={(e) => onAmountInput(item.id, e)}
      />
      <button type="button" onClick={() => onAdd(item.id)} className="btn">
        <AiOutlinePlus />
      </button>
      <button type="button" onClick={() => onAddToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
