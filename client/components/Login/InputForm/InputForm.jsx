import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputForm extends Component {
  static propTypes = {
    id: PropTypes.string,
    forHtml: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
  }

  static defaultProps = {
    name: '',
    label: '',
    type: '',
    id: '',
    forHtml: '',
  }

  constructor(props) {
    super(props);

    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange(event) {
    const { name, onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(name, event.target && event.target.value);
    }
  }

  render() {
    const {
      label, name, type, id, forHtml,
    } = this.props;
    return (
      <div className="form-group row">
        <label
          forhtml={forHtml}
          className="col-sm-3 col-form-label"
        >
          {label}
        </label>
        <div className="col-md-8">
          <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            placeholder={label}
            onChange={this.handleOnInputChange}
          />
        </div>
      </div>
    );
  }
}

export default InputForm;
