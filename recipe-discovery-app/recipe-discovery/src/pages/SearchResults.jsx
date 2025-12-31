import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  console.log('SearchResults - query:', query);

  return (<div></div>);

};
export default SearchResults;