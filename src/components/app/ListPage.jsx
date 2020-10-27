import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getApiAll } from '../../services/heyArnold-api';

//ListPage Displays a list of things on the home page of application
const ListPage = (characters) => {
  const [character, setCharacter] = useState([getApiAll]);

  useEffect(() => {
    getApiAll()
      .then(character => setCharacter(character));
  }, []);
    
  return (
    <ul>
      <li key={characters}>
        {character}
        <p>{character.name}</p>
        <p>{character.image}</p>
      </li>
      {/* const characterLinks = character.map(character => (
      <li key={`${character.id}`} >
        <p>{character.name}</p>
        <p>{character.image}</p>
      </li>)
    ) */}
    </ul>
  );
};

ListPage.propTypes = {
  character: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default ListPage;
