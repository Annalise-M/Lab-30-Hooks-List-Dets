/* eslint-disable max-len */
const fetch = require('node-fetch');

export const getAllCharacters = async() => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.map(character => ({
    _id: character._id,
    name: character.name,
    image: character.image 
  }));
};



// export const getAllCharacters = () => {
//   return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
//     .then(res => res.json())
//     .then(json => json.map(characters => ({
//       _id: characters._id,
//       name: characters.name,
//       image: characters.image
//     })));
// };

export const getCharacterById = (_id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(res => res.json())
    .then(json => json.map(character => ({
      _id: character._id,
      name: character.author,
      image: character.image
    })));
};
