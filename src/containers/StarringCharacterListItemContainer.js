import { connect } from 'react-redux';
import CharacterListItem from '../components/CharacterListItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

const StarringCharacterListItemContainer =
  connect(undefined, mapDispatchToProps)(CharacterListItem);

export default StarringCharacterListItemContainer;
