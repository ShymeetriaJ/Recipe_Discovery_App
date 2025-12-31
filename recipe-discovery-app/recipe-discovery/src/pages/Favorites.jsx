import { useFavorites } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const Favorites = () => {
  const { favorites } = useFavorites();

  console.log('Favorites page:', favorites);

  return (<div></div>)
};

export default Favorites;