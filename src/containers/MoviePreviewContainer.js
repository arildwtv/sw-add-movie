import { connect } from 'react-redux';
import MoviePreview from '../components/MoviePreview';

const mapStateToProps = state => ({
  title: state.movie.title,
  synopsis: state.movie.synopsis,
  starringCharacters: state.movie.starringCharacters
});

const MoviePreviewContainer = connect(mapStateToProps)(MoviePreview);

export default MoviePreviewContainer;
