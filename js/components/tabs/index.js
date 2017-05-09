
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

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class Tabs extends Component {
  static propTypes = {
      isFetching: PT.bool,
      received: PT.bool,
      cinemas: PT.array,
      tabs: PT.array,
      fetchCinemas: PT.func,
  }

	componentDidMount() {
		this.props.fetchCinemas()
	}

  changeTab({i}) {
    this.props.selectCinema( this.props.cinemas[i].id )
  }

  render() {
    const { isFetching, received, cinemas, tabs } = this.props
    // if (isFetching) return <Loading/>
    // if (!received) return <NotFound/>

    return (
      <ScrollableTabView
        style={{ height: height - TAB_HEIGHT }}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar />}
        onChangeTab={i => this.changeTab(i)}
        prerenderingSiblingsNumber={0}
        tabBarPosition='bottom'
        tabBarTextStyle={{flex: 1}}
      >

        {
          tabs.map((item, i) => {
            return (
              <ScrollView tabLabel={item.name} key={i}>
      					<View>
                  <MovieList />
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
    cinemas: state.cinemas.items,
    isFetching: state.cinemas.isFetching,
    received: state.cinemas.received,
    tabs: state.tabs.items,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCinemas: () => dispatch(fetchCinemas()),
    selectCinema: id => dispatch(selectCinema(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
