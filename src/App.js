import Laptop from "./assets/Laptop.jpeg";

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="about">
          <div className="about-desc">
            <h1 className="about-desc-heading">
              Get the latest tech for the best price.
            </h1>
            <p className="about-desc-p">
              The best prices for the most modern technology offered today. Make
              the best out of the best laptops, mobile phones, PC parts, and
              more.{" "}
            </p>
          </div>
          <img src={Laptop} alt="Laptop" className="about-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
