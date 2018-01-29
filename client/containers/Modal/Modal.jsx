import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { errorActions } from 'actions';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClose() {
    this.props.errorActions.closeModal();
    this.props.errorActions.closeError();
  }

  render() {
    const { errorMessage, showModal } = this.props;

    const styles = {
      modal: {
        display: (showModal) ? null : 'none',
        backgroundColor: '#222',
      },
    };
    if (!showModal) {
      return null;
    }
    return (
      <div style={styles.modal} className="modal-wrapper">
        <div>
          {errorMessage}
        </div>
        <NavLink to="/">
          <button onClick={this.handleOnClose} className="modal-item">
            Close
          </button>
        </NavLink>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorManager.errorMessage,
    showModal: state.errorManager.isOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    errorActions: bindActionCreators(errorActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

