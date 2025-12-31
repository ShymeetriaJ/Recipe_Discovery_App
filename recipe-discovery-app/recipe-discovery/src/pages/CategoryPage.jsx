import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

console.log('CategoryPage - categoryName:', categoryName, 'data:', data, 'loading:', loading, 'error:', error);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const recipes = data?.meals || [];

  return (
    <div className="category-page-container">
      <h1 className="page-title">{categoryName} Recipes</h1>
      
      {recipes.length === 0 ? (
        <p className="no-results">No recipes found.</p>
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

export default CategoryPage;