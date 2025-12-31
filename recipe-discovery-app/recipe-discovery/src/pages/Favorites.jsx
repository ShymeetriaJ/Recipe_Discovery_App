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

  )
};

export default Favorites;