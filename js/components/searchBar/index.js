
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
import * as Animatable        from 'react-native-animatable'
import myTheme                from '../../themes/base-theme'
import Tabs                   from '../tabs'
import  {
  View, Header, Button,
  Body, Title, Icon, Input,
  Item, Left, Right, Text
} 														from 'native-base'
import { globalNav }          from '../../AppNavigator'

import {
  saveSearch,
  clearSavedSearch
} 			                      from '../../actions/search'


class searchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  getBackgroundColor() {
    return this.props.backgroundColor || myTheme.primary
  }

  getTextColor() {
    return this.props.titleColor || myTheme.light
  }

  back() {
    globalNav.navigator.pop()
		if (this.props.onBack) return this.props.onBack()
  }

  renderBack() {
    return (
      <Button
        transparent
        onPress={() => this.back()}>
          <Icon name="arrow-back" size={25} style={{color: this.getTextColor()}} />
      </Button>
    )
  }

  renderSearch() {
    return (
      <Animatable.View ref="searchBarAnim" style={{height: (this.state.active) ? 64 : 0}}>
        <Header
          style={{backgroundColor: this.getBackgroundColor()}}
          searchBar
          rounded
          toolbarInputColor={myTheme.light}
          iosBarStyle="light-content">
          <Item style={{backgroundColor: myTheme.light}}>
            <Icon name="ios-search" />
            <Input
              placeholder={I18n.t('app.search')}
              value={this.props.words}
              onChangeText={(e) => this.search(e)}
              blurOnSubmit={true}
  						autoFocus={this.state.active}/>
            <Icon
              name="md-close-circle"
              color={myTheme.secondaryText}
              onPress={this.clear.bind(this)} />
          </Item>
          <Button
            style={{marginRight: 10}}
            transparent
            onPress={() => this.close()}>
            <Text style={{color: this.getTextColor()}}>
              { I18n.t('app.cancel') }
            </Text>
          </Button>
        </Header>
      </Animatable.View>
    )
  }

  renderTitle() {
    const { back, title, backgroundColor, titleColor, search } = this.props
    return (
      <Animatable.View ref="barAnim" style={{height: (this.state.active) ? 0 : 64, position: (this.state.active) ? 'absolute' : 'relative'}}>
        <Header
          style={{backgroundColor: this.getBackgroundColor()}}
          iosBarStyle="light-content">
            <Left>
              { ( back ) ? this.renderBack() : null }
            </Left>
            <Body style={{flex: (search) ? 2 : 5}}>
              <Title style={{color: this.getTextColor()}}>
                { title || I18n.t('title') }
              </Title>
            </Body>
            <Right>
              { (this.props.search) ?
                <Button
                  transparent
                  onPress={() => this.open()}>
                    <Text style={{color: this.getTextColor()}}>
                      { I18n.t('app.search') }
                    </Text>
                </Button>
                :
                null
              }
            </Right>
        </Header>
      </Animatable.View>
    )
  }

  search(e) {
    this.props.saveSearch(e.toLowerCase())
  }

  close() {
    this.clear()
    this.toggle()
  }

  open() {
    this.toggle()
  }

  clear() {
    this.props.clearSavedSearch()
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }

  toggle() {
      if (this.state.active) {
        this.refs.searchBarAnim.slideOutUp(500)
        this.refs.barAnim.fadeIn(100)
      }
      else {
        this.refs.barAnim.fadeOut(500)
        this.refs.searchBarAnim.slideInDown(500)
      }
      this.toggleActive()
  }


  render() {
    return (
      <View style={{backgroundColor: this.getBackgroundColor()}}>
      { (this.props.search) ? this.renderSearch() : null }
      { this.renderTitle() }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    words: state.search.words
})

const mapDispatchToProps = (dispatch) => ({
    saveSearch: (word) => dispatch(saveSearch(word)),
    clearSavedSearch: () => dispatch(clearSavedSearch())
})


export default connect(mapStateToProps, mapDispatchToProps)(searchBar)
