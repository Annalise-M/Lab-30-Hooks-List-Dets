/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';



const CharacterListPage = () => {
  const { characters } = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character._id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterListPage.propTypes = {

};

export default CharacterListPage;
