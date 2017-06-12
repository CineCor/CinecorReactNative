'use strict'

import React, {
	Component, PropTypes as PT
} from 'react'
import myTheme from '../../themes/base-theme'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    ScrollView,
    Dimensions
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  tab: {
		flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
  scrollContainer: {
    paddingRight: 20
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
})

class TabBar extends Component {

  static propTypes = {
    goToPage: PT.func,
    activeTab: PT.number,
    tabs: PT.array,
    underlineColor: PT.string,
    backgroundColor: PT.string,
    activeTextColor: PT.string,
    inactiveTextColor: PT.string,
    scrollContainerStyle: PT.object,
    tabStyles: PT.object
  }


  static defaultProps = {
    tabStyles: {}
  }

  constructor(props) {
    super(props)
    this.tabState = {}
    this.state = {
      renderUnderline: false,
      tabScrollValue: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeTab !== this.props.activeTab) {
      this._checkViewportOverflows()
    }
  }

  _checkViewportOverflows() {
    const getScreenMargin = (props) => {
      return StyleSheet.flatten([styles.tab, props.tabStyles.tab]).marginLeft
    }

    const screenMargin = getScreenMargin(this.props)
    const currentTabLayout = this.tabState[this.props.activeTab]
    const rightOverflow = currentTabLayout.x + currentTabLayout.width - SCREEN_WIDTH
    const hasRightViewportOverflow = rightOverflow > this.state.tabScrollValue
    const hasLeftViewportOverflow = (currentTabLayout.x < this.state.tabScrollValue)

    if (hasRightViewportOverflow) {
      const isLastTab = this.props.tabs.length === this.props.activeTab + 1
      const n = isLastTab ? 1 : 2
      const x = rightOverflow + screenMargin * n
      const y = 0
      return this.scrollTabs.scrollTo({x , y})
    }

    if (hasLeftViewportOverflow) {
      const isFirstTab = this.props.activeTab === 0
      const x = isFirstTab? 0 : currentTabLayout.x - screenMargin * 2
      const y = 0
      return this.scrollTabs.scrollTo({x, y})
    }
  }

  onTabLayout(event, page) {
    var {x, y, width, height} = event.nativeEvent.layout
    this.tabState[page] = {x, y, width, height}
    if (this.props.tabs.length === Object.keys(this.tabState).length) {
      this.setState({renderUnderline: true})
    }
  }

  renderTab = (tab, page) => {
    const { activeTab } = this.props
    const label = tab
    const isTabActive = activeTab === page
    const activeTextColor = this.props.activeTextColor || myTheme.primary
    const inactiveTextColor = this.props.inactiveTextColor || myTheme.primary
    const textStyle = this.props.tabBarTextStyle || {}
    return (
        <TouchableOpacity style={[styles.tab, this.props.tabStyles.tab]}
                          key={page}
                          onPress={() => this.props.goToPage(page)}
                          onLayout={(event) => this.onTabLayout(event, page)}>
           <Text style={[{color: isTabActive ? activeTextColor : inactiveTextColor, fontWeight: isTabActive ? '600' : '400'}, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
  }

  renderUnderline() {
    var inputRange = Object.keys(this.tabState)
    var outputRangeLeft = []
    var outputRangeWidth = []

    for (var k in this.tabState) {
      if (this.tabState.hasOwnProperty(k)) {
        outputRangeLeft.push(this.tabState[k].x)
        outputRangeWidth.push(this.tabState[k].width)
      }
    }

    var left = this.props.scrollValue.interpolate({
      inputRange: inputRange, outputRange: outputRangeLeft
    })

    var width = this.props.scrollValue.interpolate({
      inputRange: inputRange, outputRange: outputRangeWidth
    })

    var tabUnderlineStyle = {
      position: 'absolute',
      backgroundColor: this.props.underlineColor || myTheme.primary,
      height: 3,
      top: 0
    }

    return <Animated.View style={[tabUnderlineStyle, {left}, {width}]}/>
  }

  render() {
    return (
        <Animated.View style={[styles.tabs, {backgroundColor : this.props.backgroundColor}, this.props.style, this.props.tabBarStyle]}>
          <ScrollView horizontal={true}
                      contentContainerStyle={[styles.scrollContainer, this.props.scrollContainerStyle]}
                      showsHorizontalScrollIndicator={false}
                      ref={(node) => this.scrollTabs = node}
                      bounces={false}
                      scrollEventThrottle={16}
                      onScroll={(e) => this.setState({tabScrollValue: e.nativeEvent.contentOffset.x})}>
            {this.props.tabs.map(this.renderTab)}
            {this.state.renderUnderline && this.renderUnderline()}
          </ScrollView>
        </Animated.View>
    )
  }
}

module.exports = TabBar
