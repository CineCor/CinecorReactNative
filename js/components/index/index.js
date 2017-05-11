
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
import Tabs                   from '../tabs'
import SearchBar              from '../searchBar'
import  {
  Container, Content
} 														from 'native-base'


class Index extends Component {

  render() {
    return (
      <Container theme={ myTheme }>
        <Content>
          <SearchBar />
          <Tabs />
        </Content>
      </Container>
    )
  }
}

export default Index
