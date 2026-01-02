import { useFavorites } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const Favorites = () => {
  const { favorites } = useFavorites();

  console.log('Favorites page:', favorites);

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <h1 className="page-title">Your Favorite Recipes</h1>
        <div className="empty-favorites">
          <p className="empty-message">You haven't added any favorites yet!</p>
          <p className="empty-hint">Browse recipes and click the heart to save your favorites.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-container">
      <h1 className="page-title">Your Favorite Recipes</h1>
      <div className="recipes-grid">
        {favorites.map((recipeId) => (
          <FavoriteRecipeCard key={recipeId} recipeId={recipeId} />
        ))}
      </div>
    </div>
  );
};

const FavoriteRecipeCard = ({ recipeId }) => {
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
    return null;
  }

  return <RecipeCard recipe={recipe} />;
};

export default Favorites;