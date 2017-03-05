import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import characterPickListReducer from './characterPickListReducer';
import previewReducer from './previewReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  characterPickList: characterPickListReducer,
  preview: previewReducer
});

export default rootReducer;
