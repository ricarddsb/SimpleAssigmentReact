import PropTypes from 'prop-types';
import React, { Component } from 'react';

// eslint-disable-next-line
class InputForm extends Component {

  static propTypes = {
    type: PropTypes.String,
  }

  static defaultProps = {
    type: 'text',
  }

  render() {
    const { type } = this.props;
    const inputFormType = type === 'text' ? 'text' : 'password';
    return (
      <div>
        <input
          type={inputFormType}
        />
      </div>
    );
  }
}

export default InputForm;
