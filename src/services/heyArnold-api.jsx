
const fetch = require('node-fetch');

export const getApiAll = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map(characters => ({
      _id: characters._id,
      name: characters.name,
      image: characters.image
    })));
};

export const getApiById = (_id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(res => res.json())
    .then(json => json.map(character => ({
      _id: character._id,
      name: character.author,
      image: character.image
    })));
};
