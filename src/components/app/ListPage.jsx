/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getApiAll } from '../../services/heyArnold-api';
import CharacterDetail from './DetailsPage';

const ListPage = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getApiAll()
      .then(character => setCharacter(character));
  }, []);
  
  return (
    <div>
      <h3>Character List</h3>
      {character.map((character) => {
        return (
          <li key={character._id}>
            <CharacterDetail {...character}/>
         
            <br />
          </li>
        );
      })}
    </div>

  );
};

ListPage.propTypes = {

  characters: PropTypes.array
 
};

export default ListPage;
