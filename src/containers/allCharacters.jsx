import React, { useState, useEffect } from 'react-router-dom';
import CharacterList from '../components/app/CharacterListPage';
import { getAllCharacters } from '../services/heyArnold-api';


const allCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <CharacterList characters={characters} />
  );
};

export default allCharacters;
