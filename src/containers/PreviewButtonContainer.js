import { connect } from 'react-redux';
import PreviewButton from '../components/PreviewButton';

const mapStateToProps = (state, ownProps) => ({
  buttonText: ownProps.preview ? 'End Preview' : 'Preview'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClicked: () => 
    dispatch({ type: ownProps.preview ? 'PREVIEW_DEACTIVATED' : 'PREVIEW_ACTIVATED' })
});

const PreviewButtonContainer = connect(mapStateToProps, mapDispatchToProps)(PreviewButton);

export default PreviewButtonContainer;
