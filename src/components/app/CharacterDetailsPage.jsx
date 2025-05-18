import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacterById } from '../../services/heyArnold-api';

const CharacterDetail = (_id) => {
  const [character, setCharacter] = useState([getCharacterById]);

  useEffect(() => {
    getCharacterById(_id)
      .then(character => setCharacter(character._id));
  }, []);
  return (
    <div>
      <h3>{character.name}</h3>
    </div>
  );
};

CharacterDetail.propTypes = {
  characters: PropTypes.array
};

export default CharacterDetail;
