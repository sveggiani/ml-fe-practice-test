import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Alert = ({ message }) => (
  <div className="alert">
    <p>{message}</p>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired
};

export default Alert;
