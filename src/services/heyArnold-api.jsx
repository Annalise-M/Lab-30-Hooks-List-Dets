const fetch = require('node-fetch');

export const getApiAll = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.data.map(character => ({
      _id: character._id,
      name: character.author,
      image: character.image
    })));
};

export const getApiByName = (name) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json())
    .then(json => json.data.map(character => ({
      name: character.author,
      image: character.image
    })));
};
