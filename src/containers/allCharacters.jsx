import React, { useState, useEffect } from 'react-router-dom';
import CharacterList from '../components/app/ListPage';
import { getApiAll } from '../services/heyArnold-api';


const allCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiAll()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <CharacterList characters={characters} />
  );
};

export default allCharacters;
