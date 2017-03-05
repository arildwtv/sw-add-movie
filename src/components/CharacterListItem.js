import React from 'react';

const CharacterListItem = ({ character, onCharacterClicked, ...rest }) =>
  <li {...rest}>
    <a href="#" onClick={onCharacterClicked}>
      <img src={character.imageUrl} alt={character.name} />
      <h3>{character.name}</h3>
    </a>
  </li>;

export default CharacterListItem;
