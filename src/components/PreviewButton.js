import React from 'react';

const PreviewButton = ({ buttonText, onButtonClicked }) =>
  <button className="preview-button" onClick={onButtonClicked}>
    {buttonText}
  </button>;

export default PreviewButton;
