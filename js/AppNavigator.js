
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import Index                from './components/index/'
import renderScene 					from './renderScene'
import {
  View
}                           from 'react-native'
import { Navigator }        from 'react-native-deprecated-custom-components'


export const globalNav = {}

class AppNavigator extends Component {


  componentDidMount() {
		globalNav.navigator = this._navigator
  }

  render() {
    return (
      <Navigator
        ref={(ref) => { this._navigator = ref }}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromBottom}
        initialRoute={{ id: "Index" }}
        renderScene={ renderScene }
      />
    )
  }
}

export default AppNavigator
