import * as React from 'react';

import Root from './container';

// 配置material-ui主题
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';

// const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider>
        <Root />
      </MuiThemeProvider>
    );
  }
}

export default App;
