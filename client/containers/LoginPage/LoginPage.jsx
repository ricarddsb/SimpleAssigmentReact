import React, { Component } from 'react';
// import { InputForm } from 'components';
/*
// eslint-disable-next-line
class LoginPage extends Component {
  render() {
    const type = 'text';
    return (
      <div>
        <InputForm type={type} />
      </div>
    );
  }
}

export default LoginPage;
*/

// import React, { Component } from 'react';
// import { InputForm } from 'components';

/* eslint-disable */
class LoginPage extends Component {
  render() {
    const type = 'text';
    return (
      <form className="form-horizontal">
        <div className="form-group row">
          <label
            forhtml="inputUsername"
            className="col-sm-5 col-form-label"
          >
          Username
          </label>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="ejemplo_email_3"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            forhtml="inputUsername"
            className="col-sm-5 col-form-label"
          >
          Password
          </label>
          <div className="col-lg-7">
            <input
              type="password"
              className="form-control"
              id="passwordId"
              placeholder="Username"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    );
  }
}

export default LoginPage;
