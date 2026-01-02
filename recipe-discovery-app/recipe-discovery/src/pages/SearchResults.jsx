import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;                               
  }

  const recipes = data?.meals || [];

  return (
    <div className="search-results-container">
      <h1 className="page-title">Search Results for "{query}"</h1>
      
      {recipes.length === 0 ? (
        <div className="no-results-container">
          <p className="no-results">No recipes found for "{query}"</p>
          <p className="no-results-hint">Try searching for something else!</p>
        </div>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchResults;