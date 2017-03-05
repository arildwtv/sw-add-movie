import React from 'react';
import StarringCharacterListItemContainer from '../containers/StarringCharacterListItemContainer';

const StarringCharacterList = ({ starringCharacters }) =>
  <ul className="starring-character-list">
    {starringCharacters.map(character =>
      <StarringCharacterListItemContainer key={character.url} character={character} />
    )}
  </ul>;

export default StarringCharacterList;
