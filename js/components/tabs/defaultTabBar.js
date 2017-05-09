import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  Text, View, Animated,
  TouchableOpacity,
  ViewPropTypes
}                           from 'react-native'

import myTheme              from '../../themes/base-theme'
import styles               from './style'

class DefaultTabBar extends Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: ViewPropTypes.style
  }


  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor } = this.props
    const textColor = isTabActive ? activeTextColor : inactiveTextColor
    const fontWeight = isTabActive ? 'bold' : 'normal'

    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        key={ name }
        onPress={ () => onPressHandler( page ) }
      >
        <View style={ styles.tab }>
          <Text
            style={ [{ color: textColor, fontWeight }, styles.tabName] }
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            { name }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const containerWidth = this.props.containerWidth
    const numberOfTabs = this.props.tabs.length
    const tabUnderlineStyleWidth = {
      width: containerWidth / numberOfTabs
    }

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1 ], outputRange: [0,  containerWidth / numberOfTabs ],
    })

    return (
      <View style={styles.tabsShadow}>
        <View style={styles.tabs}>
          {
            this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page
              return this.renderTab(name, page, isTabActive, this.props.goToPage)
            })
          }
          <Animated.View style={[tabUnderlineStyleWidth, { left }, styles.tabUnderlineStyle ]} />
        </View>
      </View>
    )
  }
}


const mapStateToProps = state => ({
  activeTextColor: myTheme.primary,
  inactiveTextColor: myTheme.primaryText,
  backgroundColor: myTheme.primary
})

export default connect(mapStateToProps, null)(DefaultTabBar)
