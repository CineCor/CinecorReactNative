
import React, {
  Component, PropTypes as PT
}                             from 'react'
import { connect }            from 'react-redux'
import myTheme                from '../../themes/base-theme'
import DefaultTabBar          from './defaultTabBar'
import MovieList              from '../movieList'
import {
  View, Text, ScrollView,
  Dimensions
}                             from 'react-native'
import ScrollableTabView, {
	ScrollableTabBar
}        											from 'react-native-scrollable-tab-view'
import {
  fetchCinemas,
  selectCinema
} 			                      from '../../actions/cinemas'
import { signIn } 			      from '../../actions/login'
import {
  isAuthenticated,
  filterCinemas
}                             from '../../selectors'


const height = Dimensions.get('window').height


class Tabs extends Component {
  static propTypes = {
      isFetching: PT.bool,
      received: PT.bool,
      cinemas: PT.array,
      tabs: PT.array,
      fetchCinemas: PT.func,
  }

	componentDidMount() {
      this.props.signIn()
	}

  changeTab({i}) {
    this.props.selectCinema( this.props.tabs[i].id )
  }

  render() {
    const { tabs, cinemas } = this.props

    return (
      <ScrollableTabView
        style={{ height: height - TAB_HEIGHT }}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar />}
        onChangeTab={i => this.changeTab(i)}
        prerenderingSiblingsNumber={3}
        tabBarPosition='bottom'
        tabBarTextStyle={{flex: 1}}
      >

        {
          tabs.map((item, i) => {
            return (
              <ScrollView tabLabel={item.name} key={i}>
      					<View>
                  <MovieList movies={cinemas[i]} />
      					</View>
              </ScrollView>
            )
          })
        }

      </ScrollableTabView>
    )
  }
}

const TAB_HEIGHT = 63

const mapStateToProps = (state) => ({
    cinemas: filterCinemas(state),
    tabs: state.tabs.items,
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    selectCinema: id => dispatch(selectCinema(id)),
    signIn: () => dispatch(signIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
