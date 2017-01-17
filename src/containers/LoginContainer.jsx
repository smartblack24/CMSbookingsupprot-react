import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';

class LoginContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    return(
      <Login  />
    )
  }
}


const mapStateToProps = state => ({
  errors: state.errors,
});

LoginContainer = connect(mapStateToProps, null)(Login);

export default LoginContainer;
