import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const GeneralButton = props => (
  <NavLink to={props.route}>
    <button
      type="button"
      className="btn btn-blue-grey"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  </NavLink>
);

GeneralButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  route: PropTypes.string,
};


GeneralButton.defaultProps = {
  onClick: '',
  text: '',
  route: '',
};

export default GeneralButton;
