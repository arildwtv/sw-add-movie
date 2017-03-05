import { connect } from 'react-redux';
import MovieForm from '../components/MovieForm';

const mapStateToProps = state => ({
  title: state.movie.title,
  synopsis: state.movie.synopsis,
  starringCharacters: state.movie.starringCharacters
});

const mapDispatchToProps = dispatch => ({
  onTitleChanged: event => dispatch({ type: 'TITLE_CHANGED', payload: event.target.value }),
  onSynopsisChanged: event => dispatch({ type: 'SYNOPSIS_CHANGED', payload: event.target.value }),
  onCharacterRemoved: character => dispatch({ type: 'CHARACTER_REMOVED', payload: character })
});

const MovieFormContainer = connect(mapStateToProps, mapDispatchToProps)(MovieForm);

export default MovieFormContainer;
