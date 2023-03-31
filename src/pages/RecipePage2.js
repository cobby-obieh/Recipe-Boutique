import Header from '../components/Header';
import { my_recipe2 } from '../recipe2';


const RecipePage2 = () => {
    let recipe_id = window.location.pathname.split('/')[2];
    return (
      <div>
        <Header />
        <div className="container">
          
  
          <div style={{marginTop:"100px"}} className="inner-container">
            <h1>{my_recipe2[recipe_id].name}</h1>
            <p>Preparation Time: {my_recipe2[recipe_id].preparation_time} | Servings: {my_recipe2[recipe_id].servings} pax</p>
            <img src="/img/Gari.jpg" alt="" className="recipe-image2"/>
            <h3>Ingredients:</h3>
            <ul>
              {my_recipe2[recipe_id].ingredients.map((ingredient) => {
                return (
                  <li>{ingredient}</li>
                );
              })}
            </ul>
   
            <h3>Instructions:</h3>
            <ol>
              {my_recipe2[recipe_id].instructions.map((instruction) => {
                return (
                  <li>{instruction}</li>
                );
              })}
            </ol>
          </div>
           
          
        </div>
      </div>
    );
}

export default RecipePage2