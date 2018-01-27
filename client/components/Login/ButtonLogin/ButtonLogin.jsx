import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './ButtonLogin.scss';

const ButtonLogin = props => (
  <button
    type="button"
    className="btn btn-blue-grey ButtonLogin"
    onClick={props.onClick}
  >
    <NavLink to="/news">
      Sign in
    </NavLink>
  </button>
);

ButtonLogin.propTypes = {
  onClick: PropTypes.func,
};


ButtonLogin.defaultProps = {
  onClick: '',
};

export default ButtonLogin;
