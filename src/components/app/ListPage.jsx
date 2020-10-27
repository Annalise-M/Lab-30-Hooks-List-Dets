import React, { useState, useEffect } from 'react';
import { getApiAll } from '../../services/heyArnold-api';
import PropTypes from 'prop-types';

//ListPage Displays a list of things on the home page of application
const ListPage = () => {
  const [characters, allCharacters] = useState([]);

  useEffect(() => {
    getApiAll()
      .then(characters => allCharacters(characters));
  }, []);
  return (
    <getApiAll
      characters={characters}
    />
  );
};

ListPage.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gifLink: PropTypes.string.isRequired
};

export default ListPage;

