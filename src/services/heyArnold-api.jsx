
const fetch = require('node-fetch');

export const getApiAll = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map(characters => ({
      _id: characters._id,
      name: characters.author,
      image: characters.image,
      gifLink: characters.gifLink
    })))
    
    .then(console.log, 'whhhhhheeeeerrrrreeeeeeeeeissssthissss');
};

export const getApiById = (_id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51${_id}`)
    .then(res => res.json())
    .then(json => json.map(characters => ({
      _id: characters._id,
      name: characters.author,
      image: characters.image
    })));
};

//https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2

//gifLink: characters.gifLink
//https://hey-arnold-api.herokuapp.com/api/v1/gifs
//https://hey-arnold-api.herokuapp.com/api/v1/gifs/5da23754845fd2cb76d59ee7
