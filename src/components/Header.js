import { CgHeart, CgShoppingCart, CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = ({ logo, cartStatus }) => {
  // Continue Here: Make Cart Status and AddTOCart function
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          {logo}
        </Link>
      </div>

      <div className="mid-nav">
        <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
          Shop
        </Link>{" "}
      </div>

      <div className="right-nav">
        <CgProfile className="ico" size={25} />
        <CgHeart className="ico" size={25} />
        <CgShoppingCart className="ico" size={25} />
        <span>({cartStatus})</span>
      </div>
    </div>
  );
};

export default Header;