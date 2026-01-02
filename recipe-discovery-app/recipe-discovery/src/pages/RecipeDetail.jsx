import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { useFavorites } from '../context/FavoritesContext';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const recipe = data?.meals?.[0];

  if (!recipe) {
    return <ErrorMessage message="Recipe not found" />;
  }

  const isRecipeFavorited = isFavorite(recipeId);

  const handleFavoriteToggle = () => {
    if (isRecipeFavorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal}
          className="recipe-detail-image"
        />
        <div className="recipe-info">
          <h1 className="recipe-title">{recipe.strMeal}</h1>
          <p className="recipe-category">
            Category: {recipe.strCategory} | Area: {recipe.strArea}
          </p>
          <button 
            onClick={handleFavoriteToggle}
            className={`favorite-button ${isRecipeFavorited ? 'favorited' : ''}`}
          >
            {isRecipeFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
      <div className="recipe-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions-section">
          <h2>Instructions</h2>
          <p className="instructions-text">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  )
};
export default RecipeDetail;
           