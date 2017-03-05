import { connect } from 'react-redux';
import MoviePreview from '../components/MoviePreview';

const mapStateToProps = state => ({
  // TODO
});

const MoviePreviewContainer = connect(mapStateToProps)(MoviePreview);

export default MoviePreviewContainer;
