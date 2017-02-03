import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500} from 'material-ui/styles/colors';
import App from './App';

const muiTheme = getMuiTheme({
  appBar: {
    backgroundColor: indigo500,
  },
});

class MaterialUI extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <App>
          {this.props.children}
        </App>
      </MuiThemeProvider>
    );
  }
};

export default MaterialUI;
