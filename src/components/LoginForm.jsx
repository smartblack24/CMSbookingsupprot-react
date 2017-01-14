import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

class LoginForm extends React.Component {
  handleSubmit(values) {
    console.log(values);
   }
  render() {
    return (
      <div className="col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 login-form-container">
        <LocalForm
          onSubmit={(values) => this.handleSubmit(values)}
          >
          <div className="input-group">
            <label htmlFor="name">Username</label>
            <Control.text
               model=".username"
               required
             />
          </div>
          <div className="input-group">
            <label htmlFor="name">Password</label>
            <Control
               model=".password"
               type="password"
               required
             />
          </div>
          <div className="text-center">
            <button className="button" type="submit">
              Sign in
            </button>
            <Control.reset model="local" className="button button-clear">
              Clear Values
            </Control.reset>
          </div>
        </LocalForm>
      </div>
    );
  }
}

export default LoginForm;
