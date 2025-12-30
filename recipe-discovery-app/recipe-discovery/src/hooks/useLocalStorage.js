import { useState, useEffect } from 'react';
// key(storing)  (default value)
const useLocalStorage = (key, initialValue) => {
    console.log('useLocalStorage:', key, 'and initialValue:', initialValue);
    // My stored state; updater
    const [storedValue, setStoredValue] = useState(() => {
        try {
            console.log('testing read for local storage:', key);

            const item = window.localStorage.getItem(key);
            
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log('Error from localStorage:', error);
            return initialValue;
        }
    });
    useEffect(() => {
    try {
      console.log('localStorage. Key:', key, 'Value:', storedValue);
      
      window.localStorage.setItem(key, JSON.stringify(storedValue));
      console.log('saved to localStorage');
      
    } catch (error) {
      console.log('Error from localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
export default useLocalStorage;
