import { connect } from 'react-redux';
import CharacterListItem from '../components/CharacterListItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCharacterClicked: event => {
    event.preventDefault();
    dispatch({ type: 'CHARACTER_REMOVED', payload: ownProps.character });
  }
});

const StarringCharacterListItemContainer =
  connect(undefined, mapDispatchToProps)(CharacterListItem);

export default StarringCharacterListItemContainer;
