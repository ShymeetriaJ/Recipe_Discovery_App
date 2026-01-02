import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const addFavorite = (recipeId) => {
    setFavorites([...favorites, recipeId]);
  };

  const removeFavorite = (recipeId) => {
    setFavorites(favorites.filter(id => id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    const result = favorites.includes(recipeId);
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
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  
  if (!context) {
    throw new Error('useFavorites can only be accessed within FavoritesProvider');
  }
  return context;
};

