
import React, { Component }   from 'react'
import Platform               from 'react-native'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
import Tabs                   from '../tabs'
import  {
  Container, Content,
  Text, Header, Button,
  Body, Title, Icon, Input,
  InputGroup
} 														from 'native-base'


class Index extends Component {

  render() {
    return (
      <Container theme={ myTheme }>
        <Content>
          <Header
            style={{backgroundColor: myTheme.primary}}
            searchBar
            rounded
            iosBarStyle="light-content">
            <Body>
              <Title style={{color: myTheme.light}}>Cinecor</Title>
            </Body>
          </Header>
          <Tabs />
        </Content>
      </Container>
    )
  }
}

export default Index
