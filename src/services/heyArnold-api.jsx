export const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.data.map(character => ({
      _id: character._id,
      name: character.author,
      image: character.image
    })))
    .then(console.log('{this.state}'));
};
