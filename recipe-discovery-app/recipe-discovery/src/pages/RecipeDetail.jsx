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

console.log('RecipeDetail - recipeId:', recipeId, 'loading:', loading, 'data:', data);

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
console.log('Total ingredients found:', ingredients.length);

  return (<div></div>)
};
export default RecipeDetail;
           