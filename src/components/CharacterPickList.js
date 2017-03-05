import React from 'react';
import CharacterPickListItemContainer from '../containers/CharacterPickListItemContainer';

const CharacterPickList = ({ characterPickList }) =>
  <ul className="character-pick-list">
    {characterPickList.map(character =>
      <CharacterPickListItemContainer
        key={character.url}
        character={character}
      />
    )}
  </ul>;

export default CharacterPickList;
