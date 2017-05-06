
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import myTheme                from '../../themes/base-theme';
import {
  View, Text, ScrollView,
  Dimensions
}                             from 'react-native'
import ScrollableTabView,
  { ScrollableTabBar }        from 'react-native-scrollable-tab-view';
import DefaultTabBar          from './defaultTabBar'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Tabs extends Component {

  render() {
    return (
      <ScrollableTabView
        style={{ height: height - TAB_HEIGHT }}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar />}
        tabBarPosition='bottom'
        tabBarTextStyle={{flex: 1}}
      >
        <ScrollView tabLabel="View 1">
					<View>
						<Text>View 1</Text>
					</View>
        </ScrollView>

        <ScrollView tabLabel="View 2">
            <View>
              <Text>View 2</Text>
            </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const TAB_HEIGHT = 63

export default Tabs
