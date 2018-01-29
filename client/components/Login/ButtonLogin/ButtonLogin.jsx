import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './ButtonLogin.scss';

const ButtonLogin = props => (
  <NavLink to="/news">
    <button
      type="button"
      className="btn btn-blue-grey ButtonLogin"
      onClick={props.onClick}
    >
        Sign in
    </button>
  </NavLink>
);

ButtonLogin.propTypes = {
  onClick: PropTypes.func,
};


ButtonLogin.defaultProps = {
  onClick: '',
};

export default ButtonLogin;
