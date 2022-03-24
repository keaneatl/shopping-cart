import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AddToCart = ({
  name,
  price,
  amount,
  id,
  onAdd,
  onLessen,
  onAddToCart,
  onAmountInput,
}) => {
  const onReadKey = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <p className="product-name">{name}</p>
      <p className="product-price">${price}</p>
      <button type="button" onClick={() => onLessen(id)}>
        <AiOutlineMinus />
      </button>
      <span className="quantity">{amount}</span>
      <input
        type="tel"
        value={amount}
        className="quantity"
        onKeyDown={onReadKey}
        onChange={(e) => onAmountInput(id, e)}
      />
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
