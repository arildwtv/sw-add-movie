import { combineReducers } from 'redux';

const titleReducer = (title = '', action) => {
  switch (action.type) {
    case 'TITLE_CHANGED': return action.payload;
    default: return title;
  }
};

const synopsisReducer = (synopsis = '', action) => {
  switch (action.type) {
    case 'SYNOPSIS_CHANGED': return action.payload;
    default: return synopsis;
  }
};

const starringCharactersReducer = (starringCharacters = [], action) => {
  switch (action.type) {
    case 'CHARACTER_ADDED': return [...starringCharacters, action.payload];
    case 'CHARACTER_REMOVED': return starringCharacters.filter(character => character.url !== action.payload.url);
    default: return starringCharacters;
  }
}

const movieReducer = combineReducers({
  title: titleReducer,
  synopsis: synopsisReducer,
  starringCharacters: starringCharactersReducer
});

export default movieReducer;
