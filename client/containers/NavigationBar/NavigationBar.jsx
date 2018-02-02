import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { apiActions } from 'actions';

import './NavigationBar.scss';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.handleNewsOnClick = this.handleNewsOnClick.bind(this);
    this.handleOnLogoutOnClick = this.handleOnLogoutOnClick.bind(this);
  }

  handleOnLogoutOnClick() {
    this.props.apiActions.logOutClick();
  }

  handleNewsOnClick() {
    this.props.apiActions.newsClick();
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded NavigationBar">
        <div
          onClick={this.handleNewsOnClick}
          role="button"
          tabIndex={0}
          onKeyUp={this.handleKeyUp}
        >
          <NavLink to="/News">
            <h1 className="navbar-brand mb-0" >News</h1>
          </NavLink>
        </div>
        <NavLink to="/">
          <span
            className="navbar-brand mb-0"
            onClick={this.handleOnLogoutOnClick}
            role="button"
            tabIndex={-2}
            onKeyDown={this.handleKeyDown}
          >
              LogOut
          </span>
        </NavLink>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(NavigationBar);
