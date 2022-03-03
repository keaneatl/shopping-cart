const ProductCard = ({ name, price, src, id }) => {
  return (
    <div className="product-card">
      <img src={src} className="product-img" alt={name} />
      <span>
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </span>
    </div>
  );
};

export default ProductCard;
