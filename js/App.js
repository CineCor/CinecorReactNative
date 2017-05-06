
import React, { Component } from 'react';
import AppNavigator         from './AppNavigator';
import I18n                 from 'react-native-i18n';

I18n.fallbacks = true;


class App extends Component {

  render() {
    return <AppNavigator />;
  }

}

export default App;
