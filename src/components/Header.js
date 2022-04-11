import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = ({ logo, cartStatus }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link
          to="/shopping-cart"
          style={{ textDecoration: "none", color: "black" }}
        >
          {logo}
        </Link>
      </div>

      <div className="mid-nav">
        <Link
          to="/shopping-cart/shop"
          style={{ textDecoration: "none", color: "black" }}
        >
          Shop
        </Link>{" "}
      </div>

      <div className="right-nav">
        <Link
          to="/shopping-cart/cart"
          style={{ textDecoration: "none", color: "black" }}
        >
          <CgShoppingCart className="ico" size={25} />
        </Link>

        <span>({cartStatus})</span>
      </div>
    </div>
  );
};

export default Header;
