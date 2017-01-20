import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends React.Component {

  handleSubmit(values) {
    this.props.login(values.email,values.password);
  }
  render() {
    return (
      <div className="col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 login-form-container">
        <LocalForm
          onSubmit={(values) => this.handleSubmit(values)}
          >
          <div className="input-group">
            <label htmlFor="name">Email</label>
            <Control
              type="email"
               model=".email"
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
            <button className="button" >
              Log in
            </button>
            <Control.reset model="local" className="button button-clear">
              Clear Values
            </Control.reset>
          </div>
        </LocalForm>
      </div>
    );
  }
};


LoginForm = connect(
  null,
  actions
)(LoginForm);

export default LoginForm;
