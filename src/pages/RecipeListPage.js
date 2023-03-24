import { Link } from "react-router-dom";
import Header from "../components/Header";
import { my_recipe } from "../recipe";
import { my_recipe2 } from "../recipe";
import Footer from "../components/Footer";
 
const RecipeListPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
          <h1>Our Recipes</h1>
          <div className="recipe-list">
            {Object.keys(my_recipe).map((recipe) => {
              return (
                <Link style={{textDecoration:"none"}} to={`/recipe/${recipe}`}>
                  <div className="recipe">
                    <h2>{my_recipe[recipe].name}</h2>
                    <div className="sub-section">
                      <p>{my_recipe[recipe].preparation_time}</p>
                      <p>{my_recipe[recipe].servings} servings</p>
                    </div>
 
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="recipe-list">
          {Object.keys(my_recipe2).map((recipe) => {
              return (
                <Link style={{textDecoration:"none"}} to={`/recipe/${recipe}`}>
                  <div className="recipe">
                    <h2>{my_recipe2[recipe].name}</h2>
                    <div className="sub-section">
                      <p>{my_recipe2[recipe].preparation_time}</p>
                      <p>{my_recipe2[recipe].servings} servings</p>
                    </div>
 
                  </div>
                </Link>
              );
            })}
          </div>

          
        </div>
        <Footer />
      </div>


    </div>
  );
}
 
export default RecipeListPage;