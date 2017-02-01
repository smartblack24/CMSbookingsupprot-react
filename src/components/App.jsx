import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  appBar: {
    backgroundColor: indigo500,
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
};

export default App;
