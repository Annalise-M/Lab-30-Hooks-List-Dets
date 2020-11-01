import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/heyArnold-api';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getAllCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
      
  }, []);

  return {
    characters
  };

};
