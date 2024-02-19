import React from 'react';
import '../css/ErrorModal.css';

const ErrorModal = ({ errorMessage }) => (

  <div className='modal-overlay'>
  <div className="error-modal">
    <h2>Error</h2>
    <p>{errorMessage}</p>
  </div>
  </div>
);

export default ErrorModal;