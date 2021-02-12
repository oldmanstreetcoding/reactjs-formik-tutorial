/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const TextError = ({ children }) => (
  <div style={{ color: 'red' }} className="error">
    {children}
  </div>
);

export default TextError;
