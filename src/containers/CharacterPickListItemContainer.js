import { connect } from 'react-redux';
import CharacterListItem from '../components/CharacterListItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

const CharacterPickListItemContainer =
  connect(undefined, mapDispatchToProps)(CharacterListItem);

export default CharacterPickListItemContainer;
