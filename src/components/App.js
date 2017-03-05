import React from 'react';
import MovieFormContainer from '../containers/MovieFormContainer';
import MoviePreviewContainer from '../containers/MoviePreviewContainer';
import PreviewButtonContainer from '../containers/PreviewButtonContainer';

const App = ({ preview }) =>
  <section className={preview ? 'preview-section' : 'form-section'}>
    <PreviewButtonContainer preview={preview} />
    {preview ? <MoviePreviewContainer /> : <MovieFormContainer />}
  </section>;

export default App;
