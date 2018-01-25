import React, { Component } from 'react';
import { InputForm, ButtonLogin } from 'components';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleOnClickLogin = this.handleOnClickLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleOnClickLogin() {
    const { username, password } = this.state;
    console.log('avel ', username, password);
  }

  handleInputChange(inputName, inputValue) {
    this.setState({
      [inputName]: inputValue,
    });
  }

  render() {
    return (
      <form className="form-horizontal" >
        <InputForm
          name="username"
          onChange={this.handleInputChange}
          label="Username"
          type="text"
          id="usernameLogin"
          forHtml="usernameLogin"
        />
        <InputForm
          name="password"
          onChange={this.handleInputChange}
          label="Password"
          type="password"
          id="passwordLogin"
          forHtml="passwordLogin"
        />
        <ButtonLogin
          onClick={this.handleOnClickLogin}
        >
          Sign in
        </ButtonLogin >
      </form>
    );
  }
}

export default LoginPage;
