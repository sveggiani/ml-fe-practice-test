import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ expanded, children }) => (
  <button className={classNames('button', { 'button--expanded': expanded })}>
    {children}
  </button>
);

Button.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
