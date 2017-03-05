import { connect } from 'react-redux';
import CharacterListItem from '../components/CharacterListItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCharacterClicked: event => {
    event.preventDefault();
    dispatch({ type: 'CHARACTER_ADDED', payload: ownProps.character });
  }
});

const CharacterPickListItemContainer =
  connect(undefined, mapDispatchToProps)(CharacterListItem);

export default CharacterPickListItemContainer;
