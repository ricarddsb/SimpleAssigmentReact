import PropTypes from 'prop-types';
import React from 'react';

import './ButtonLogin.scss';

const ButtonLogin = props => (
  <button
    type="button"
    className="btn btn-blue-grey ButtonLogin"
    onClick={props.onClick}
  >
    Sign in
  </button>
);

ButtonLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLogin;

