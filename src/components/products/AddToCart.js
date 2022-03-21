const AddToCart = ({ name, price, id, onInput, onClick }) => {
  return (
    <span>
      <p className="product-name">{name}</p>
      <p className="product-price">
        ${price}
        <input
          type="number"
          className="quantity"
          onInput={onInput}
          inputid={id}
          min={0}
          max={100}
        ></input>
        <button type="button" onClick={(name) => onClick}>
          Add to Cart
        </button>
      </p>
    </span>
  );
};

export default AddToCart;
