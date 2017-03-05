import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  preview: state.preview
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
