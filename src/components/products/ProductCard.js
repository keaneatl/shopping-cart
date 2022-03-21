import AddToCart from "./AddToCart";

const ProductCard = ({
  name,
  price,
  src,
  id,
  onQuantityAdd,
  onQuantityReduce,
}) => {
  return (
    <div className="product-card">
      <img src={src} className="product-img" alt={name} />
      <AddToCart
        name={name}
        price={price}
        id={id}
        onQuantityAdd={onQuantityAdd}
        onQuantityReduce={onQuantityReduce}
      />
    </div>
  );
};

export default ProductCard;
