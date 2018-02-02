import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { apiActions } from 'actions';
import { InputForm, GeneralButton } from 'components';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleOnLoginButtonClick = this.handleOnLoginButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleOnLoginButtonClick() {
    const { username, password } = this.state;
    this.props.apiActions.userDataInput(username, password);
    this.props.apiActions.loginFetch(username, password);
  }

  handleInputChange(inputName, inputValue) {
    this.setState({
      [inputName]: inputValue,
    });
  }

  render() {
    return (
      <form className="form-horizontal" >
        <div>
          <InputForm
            name="username"
            onChange={this.handleInputChange}
            label="Username"
            type="text"
            id="usernameLogin"
            forHtml="usernameLogin"
          />
        </div>
        <div>
          <InputForm
            name="password"
            onChange={this.handleInputChange}
            label="Password"
            type="password"
            id="passwordLogin"
            forHtml="passwordLogin"
          />
        </div>
        <GeneralButton
          onClick={this.handleOnLoginButtonClick}
          text="Sign in"
          route="/news"
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorManager.errorMessage,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
