import React from 'react';
import { connect } from 'react-redux';
import { getErrors } from '../reducers';
import Login from '../components/Login';
import AlertContainer from 'react-alert';
import icon from '../images/material_error.png';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'dark',
      time: 6000,
      transition: 'scale'
    };
  }

  showAlert() {
    const { errors } = this.props
    this.msg.show(errors.message, {
      type: 'error',
      icon: <img src={icon} alt="alert" />,
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.errors){
      this.showAlert();
    }
  }

  render() {
    return(
      <div>
        <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
        <Login  />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  errors: getErrors(state),
});

LoginContainer = connect(mapStateToProps)(LoginContainer);

export default LoginContainer;
