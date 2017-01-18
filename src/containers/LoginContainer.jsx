import React from 'react';
import { connect } from 'react-redux';
import { getErrors } from '../reducers';
import Login from '../components/Login';
import AlertContainer from 'react-alert';

//icon: <img src="path/to/some/img/32x32.png" />


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'light',
      time: 5000,
      transition: 'scale'
    };
  }

  showAlert() {
    msg.show('Error', {
      type: 'error'
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
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
        <Login  />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  errors: getErrors(state),
});

LoginContainer = connect(mapStateToProps, null)(Login);

export default LoginContainer;
