import Laptop from "../assets/about.jpeg";

const MainPage = () => {
  return (
    <div className="home">
      <div className="about">
        <div className="about-desc">
          <h1 className="about-desc-heading">
            Get the latest tech for the best price.
          </h1>
          <p className="about-desc-p">
            The best prices for the most modern technology offered today. Make
            the best out of the best laptops, mobile phones, PC parts, and more.{" "}
          </p>
        </div>
        <img src={Laptop} alt="Laptop" className="about-img" />
      </div>

      {/* <h1>-New Releases-</h1> */}

      {/* <div className="preview">
        {products.map((product) => {
          return (
            <ProductCard
              name={product.name}
              price={product.price}
              src={product.src}
              key={product.id}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default MainPage;
