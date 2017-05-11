
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

  renderSearch() {
    return (
      <Animatable.View ref="searchBarAnim" style={({height: (this.state.active) ? 64 : 0})}>
        <Header
          style={{backgroundColor: myTheme.primary}}
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
              style={{color: myTheme.secondaryText}}
              onPress={this.clear.bind(this)} />
          </Item>
          <Button
            style={{marginRight: 10}}
            transparent
            onPress={() => this.close()}>
            <Text style={{color: myTheme.light}}>
              { I18n.t('app.cancel') }
            </Text>
          </Button>
        </Header>
      </Animatable.View>
    )
  }

  renderTitle() {
    return (
      <Animatable.View ref="barAnim" style={({height: (this.state.active) ? 0 : 64})}>
        <Header
          style={{backgroundColor: myTheme.primary}}
          iosBarStyle="light-content">
            <Left>
            </Left>
            <Body>
              <Title style={{color: myTheme.light}}>
                {I18n.t('title')}
              </Title>
            </Body>
            <Right>
                <Button
                  transparent
                  onPress={() => this.open()}>
                    <Text style={{color: myTheme.light}}>
                      { I18n.t('app.search') }
                    </Text>
                </Button>
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
      <View style={{backgroundColor: myTheme.primary}}>
      { this.renderSearch() }
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
