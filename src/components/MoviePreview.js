import React from 'react';

const MoviePreview = ({ title, synopsis, starringCharacters }) =>
  <section>
    <h1 className="logo">
      STAR WARS
      <sub>{title}</sub>
    </h1>
    <div className="titles">
      <div className="title-content">
        {synopsis.split(/\n+/).map((paragraph, index) =>
          <div key={index.toString()}>{paragraph}</div>
        )}
        <ul className="titles-images">
          {starringCharacters.map(character =>
            <li key={character.url}>
              <img src={character.imageUrl} alt={character.name} />
            </li>
          )}
        </ul>
      </div>
    </div>
  </section>;

export default MoviePreview;