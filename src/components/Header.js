import { CgHeart, CgShoppingCart, CgProfile } from "react-icons/cg";

const Header = ({ logo }) => {
  return (
    <div className="header">
      <div className="logo">{logo}</div>

      <div className="mid-nav">Shop</div>

      <div className="right-nav">
        <CgProfile className="ico" size={25} />
        <CgHeart className="ico" size={25} />
        <CgShoppingCart className="ico" size={25} />
      </div>
    </div>
  );
};

export default Header;
