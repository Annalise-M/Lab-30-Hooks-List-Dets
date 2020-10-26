import React, { useState, useEffect } from 'react';
import { getApiAll } from '../../services/heyArnold-api';


//ListPage Displays a list of things on the home page of application
const ListPage = () => {
  const [characters, allCharacters] = useState([]);

  useEffect(() => {
    getApiAll()
      .then(characters => allCharacters(characters));
  }, []);
  return (
    <getApiAll characters={characters} />
  );
};

export default ListPage;
