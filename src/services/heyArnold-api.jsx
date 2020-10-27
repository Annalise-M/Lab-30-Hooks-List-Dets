
const fetch = require('node-fetch');

export const getApiAll = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(json => json.map(character => ({
      id: character.id,
      name: character.name,
      image: character.image
    }
    )));
};

export const getApiById = (id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(json => json.map(character => ({
      _id: character._id,
      name: character.author,
      image: character.image
    })));
};

//https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2

//gifLink: characters.gifLink
//https://hey-arnold-api.herokuapp.com/api/v1/gifs
//https://hey-arnold-api.herokuapp.com/api/v1/gifs/5da23754845fd2cb76d59ee7
