import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const categories = data?.categories || [];

  return (
    <div className="home-container">
      <h1 className="page-title">Recipe Categories</h1>
      
      <div className="categories-grid">
        {categories.map((category) => (
          <Link 
            to={`/category/${category.strCategory}`} 
            key={category.idCategory}
            className="category-card">
            <img 
              src={category.strCategoryThumb} 
              alt={category.strCategory}
              className="category-image"
            />
            <div className="category-content">
              <h2 className="category-name">{category.strCategory}</h2>
              <p className="category-description">
                {category.strCategoryDescription.substring(0, 100)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;