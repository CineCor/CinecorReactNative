
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { actions }          from 'react-native-navigation-redux-helpers';
import Index                from './components/index/';
import SplashPage           from './components/splashscreen/';
import { statusBarColor }   from './themes/base-theme';
import {
  BackAndroid, StatusBar,
  NavigationExperimental,
  View
} from 'react-native';




const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }

  popRoute() {
    this.props.popRoute();
  }

  _renderScene(props) {
    switch (props.scene.route.key) {
      case 'splashscreen':
        return <SplashPage />;
      case 'index':
        return <Index />;
      default :
        return <Index />;
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="light-content"
        />
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={this._renderScene}
        />
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: () => dispatch(popRoute()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
