
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
import Tabs                   from '../tabs'
import  {
  View, Header, Button,
  Body, Title, Icon, Input,
  Item, Left, Right,
  Container
} 														from 'native-base'


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
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button
          style={{marginRight: 10}}
          transparent
          onPress={() => this.toggle()}>
          <Icon
            style={{color: myTheme.light, fontSize: 40}}
            name="ios-close"
          />
        </Button>
      </Header>
    )
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
                  <Icon
                    style={{color: myTheme.light}}
                    name="ios-search"
                  />
              </Button>
          </Right>
      </Header>
    )
  }

  render() {
    return (this.state.active) ? this.renderSearch() : this.renderTitle()
  }
}

export default searchBar
