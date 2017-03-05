import React from 'react';
import StarringCharacterList from './StarringCharacterList';
import CharacterPickListContainer from '../containers/CharacterPickListContainer';

const MovieForm = ({
  title,
  synopsis,
  starringCharacters,
  onTitleChanged,
  onSynopsisChanged,
  onCharacterRemoved
}) =>
  <section>

    <h2>Title</h2>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={onTitleChanged}
    />

    <h2>Synopsis</h2>
    <textarea
      placeholder="Synopsis"
      value={synopsis}
      rows={10}
      onChange={onSynopsisChanged}
    />

    <section className="starring-characters-section">
      <h2>Starring Characters</h2>
      <StarringCharacterList starringCharacters={starringCharacters} />
    </section>

    <section className="character-pick-list-section">
      <h2>Pick Characters</h2>
      <CharacterPickListContainer />
    </section>
  </section>;

export default MovieForm;
