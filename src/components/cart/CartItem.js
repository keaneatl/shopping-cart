const CartItem = ({ name, image, amount, id, onDelete }) => {
  return (
    <div className="cart-item">
      <img src={image} className="thumbnail" alt={`${name} thumbnail`} />
      <span className="cart-item-label">
        {name}
        <b>{"  x"}</b>
        {amount}
      </span>
      <span className="remove-item" onClick={() => onDelete(id)}>
        remove
      </span>
    </div>
  );
};

export default CartItem;
