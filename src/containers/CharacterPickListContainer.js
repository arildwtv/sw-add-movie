import { connect } from 'react-redux';
import CharacterPickList from '../components/CharacterPickList';

const mapStateToProps = state => ({
  // TODO
});

const CharacterPickListContainer =
  connect(mapStateToProps)(CharacterPickList);

export default CharacterPickListContainer;
