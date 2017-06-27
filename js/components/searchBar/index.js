
import React, {
  Component, PropTypes as PT
} from "react"
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { Keyboard } from 'react-native'
import * as Animatable from 'react-native-animatable'
import myTheme from '../../themes/base-theme'
import Tabs from '../tabs'
import  {
  View, Header, Button,
  Body, Title, Icon, Input,
  Item, Left, Right, Text
} from 'native-base'
import {
  Image, StatusBar,
  Dimensions
} from 'react-native'
import { globalNav } from '../../AppNavigator'
import {
  saveSearch,
  clearSavedSearch
} from '../../actions/search'


const { width } = Dimensions.get('window')

class searchBar extends Component {
  static propTypes = {
    backgroundColor: PT.string,
    titleColor: PT.string,
    onBack: PT.func,
    words: PT.string,
    clearSavedSearch: PT.func,
    back: PT.bool,
    title: PT.string,
    search: PT.bool,
    saveSearch: PT.func,
    clearSavedSearch: PT.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  getBackgroundColor() {
    return this.props.backgroundColor || myTheme.light
  }

  getTextColor() {
    return this.props.titleColor || myTheme.primary
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
      <Animatable.View ref="searchBarAnim" style={{position: 'absolute', right: -width, zIndex: 3, width: width}}>
        <Header
          style={{backgroundColor: this.getBackgroundColor(), borderBottomWidth: 0}}
          searchBar
          rounded
          toolbarInputColor={myTheme.light}
          iosBarStyle="light-content">
          <Item style={{backgroundColor: myTheme.backgroundSearcher}}>
          <Icon name="ios-search" />
          <Input
            placeholder={I18n.t('app.search')}
            value={this.props.words}
            onChangeText={(e) => this.search(e)}
            blurOnSubmit={true}
            onSubmitEditing={Keyboard.dismiss} />
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

  renderLogo(title) {
    return (title) ? (
      <Text style={{color: this.getTextColor()}}>
        { title }
      </Text>
    )
    :
    (
      <Image
        style={{width: 28, height: 32, marginTop: 5}}
        source={require('../../images/cinecor.png')} />
    )
  }

  renderTitle() {
    const { back, title, backgroundColor, titleColor, search } = this.props
    return (
      <Animatable.View ref="barAnim">
        <Header
          style={{backgroundColor: this.getBackgroundColor(), borderBottomWidth: 0}}
          iosBarStyle="light-content">
          <Left style={{flex: (back) ? 1 : 2}}>
            { ( back ) ? this.renderBack() : null }
          </Left>
          <Body style={{flex: (search) ? 2 : 5}}>
          <Title>
            { this.renderLogo(title) }
          </Title>
          </Body>
          <Right style={{flex: (back) ? 1 : 2}}>
            { (search) ?
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
    Keyboard.dismiss()
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
      this.refs.searchBarAnim.transition(
        {left: 0},
        {left: width},
        500
      )
      this.refs.barAnim.fadeIn(100)
    }
    else {
      this.refs.barAnim.fadeOut(500)
      this.refs.searchBarAnim.transition(
        {left: width},
        {left: 0},
        500
      )
    }
    this.toggleActive()
  }

  setStatusBarColor() {
    const statusBarColor = (this.getTextColor() === myTheme.light) ? 'light-content' : 'dark-content'

    return (
      <StatusBar
        barStyle={statusBarColor}
        animated={true} />
    )
  }


  render() {
    return (
      <View style={{ backgroundColor: this.getBackgroundColor() }}>
        { (this.props.search) ? this.renderSearch() : null }
        { this.renderTitle() }
        { this.setStatusBarColor() }
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
