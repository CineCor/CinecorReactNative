
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { actions }            from 'react-native-navigation-redux-helpers';
import myTheme                from '../../themes/base-theme';
import {
  View, Text,
  ScrollView
}                             from 'react-native'
import ScrollableTabView,
  { ScrollableTabBar }        from 'react-native-scrollable-tab-view';


const {
  pushRoute,
  replaceAt,
} = actions;

class Tabs extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('index', { key: route }, this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 300}}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarPosition='bottom'
      >
      <ScrollView tabLabel="ios-paper" style={{flex:1}}>
        <View style={{flex:1, backgroundColor: 'red'}}>
          <Text>News</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-people" style={{flex:1}}>
        <View style={{flex:1, backgroundColor: 'red'}}>
          <Text>Friends</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={{flex:1}}>
        <View style={{flex:1, backgroundColor: 'red'}}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={{flex:1}}>
        <View style={{flex:1, backgroundColor: 'red'}}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={{flex:1}}>
        <View style={{flex:1, backgroundColor: 'red'}}>
          <Text>Other nav</Text>
        </View>
      </ScrollView>
      </ScrollableTabView>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Tabs);
