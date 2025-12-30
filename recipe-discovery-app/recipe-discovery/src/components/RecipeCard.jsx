import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  console.log('RecipeCard rendering:', recipe);

  return (
    <Link to={`/recipe/${recipe.idMeal}`} style={styles.card}>
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal}
        style={styles.image}
      />
      <div style={styles.content}>
        <h3 style={styles.title}>{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};