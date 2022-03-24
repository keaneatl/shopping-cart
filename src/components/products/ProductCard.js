import AddToCart from "./AddToCart";

const ProductCard = ({
  name,
  price,
  amount,
  id,
  productImg,
  onAdd,
  onLessen,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <img src={productImg} className="product-img" alt={name} />
      <AddToCart
        name={name}
        price={price}
        amount={amount}
        id={id}
        onAdd={onAdd}
        onLessen={onLessen}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default ProductCard;
