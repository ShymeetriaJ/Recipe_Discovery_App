import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {

  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card">
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal}
        className="recipe-card-image"
      />
      <div className="recipe-card-content">
        <h3 className="recipe-card-title">{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};
export default RecipeCard;