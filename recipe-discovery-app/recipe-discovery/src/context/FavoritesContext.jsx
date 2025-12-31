import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext = createContext();
console.log('FavoritesContext created');

export const FavoritesProvider = ({ children }) => {
  console.log('FavoritesProvider rendering');

  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  console.log('Current favorites:', favorites);

  const addFavorite = (recipeId) => {
    console.log('Add favorite:', recipeId);
    setFavorites([...favorites, recipeId]);
  };

  const removeFavorite = (recipeId) => {
    console.log('Remove favorite:', recipeId);
    setFavorites(favorites.filter(id => id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    const result = favorites.includes(recipeId);
    console.log('Checking if', recipeId, 'is favorite:', result);
    return result;
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;