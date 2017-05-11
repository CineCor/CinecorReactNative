
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
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
            blurOnSubmit={true} />
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
    )
  }

  search(e) {
    this.props.saveSearch(e.toLowerCase())
  }

  clear() {
    return this.props.clearSavedSearch()
  }

  close() {
    this.clear()
    return this.toggle()
  }

  toggle() {
    this.setState({
      active: !this.state.active
    })
  }

  renderTitle() {
    return (
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
                onPress={() => this.toggle()}>
                  <Text style={{color: myTheme.light}}>
                    { I18n.t('app.search') }
                  </Text>
              </Button>
          </Right>
      </Header>
    )
  }

  render() {
    return (this.state.active) ? this.renderSearch() : this.renderTitle()
  }
}

const mapStateToProps = (state) => ({
    words: state.search.words
});

const mapDispatchToProps = (dispatch) => ({
    saveSearch: (word) => dispatch(saveSearch(word)),
    clearSavedSearch: () => dispatch(clearSavedSearch())
});


export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
