import AddToCart from "./AddToCart";

const ProductCard = ({
  item,
  productImg,
  onAdd,
  onLessen,
  onAddToCart,
  onAmountInput,
}) => {
  return (
    <div className="product-card">
      <img src={productImg} className="product-img" alt={item.name} />
      <p className="product-name">{item.name}</p>
      <p className="product-price">${item.price}</p>
      <AddToCart
        item={item}
        onAdd={onAdd}
        onLessen={onLessen}
        onAddToCart={onAddToCart}
        onAmountInput={onAmountInput}
      />
    </div>
  );
};

export default ProductCard;
