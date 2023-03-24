import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title">Recipe Boutique</h1>
        <p>"The Hub For Easy Recipes"</p>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/">Home</Link>
        <Link className="header-items" to="/community">Community</Link>
        <Link className="header-items" to="/recipe">Recipe</Link>
      </div>
    </div>
  );
}
 
export default Header;