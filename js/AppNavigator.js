
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Index                from './components/index/';
import { statusBarColor }   from './themes/base-theme';
import {
  BackAndroid, StatusBar,
  View
} from 'react-native';


class AppNavigator extends Component {


  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => true);
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="default"
        />
        <Index />
      </View>
    );
  }
}

export default AppNavigator
