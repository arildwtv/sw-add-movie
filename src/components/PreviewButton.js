import React from 'react';

const PreviewButton = ({ buttonText, onButtonClicked }) =>
  <button onClick={onButtonClicked}>{buttonText}</button>;

export default PreviewButton;
