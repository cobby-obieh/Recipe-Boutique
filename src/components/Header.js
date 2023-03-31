import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img src="img/Logo.svg" className="logo" alt="" />
      </div>
      <div className="header-links">
        <Link className="header-items" to="/">Home</Link>
        <Link className="header-items" to="/About">About</Link>
        <Link className="header-items" to="/recipe">Recipes</Link>
      </div>
    </div>
  );
}
 
export default Header;