
import React, {
  Component, PropTypes as PT
}                             from 'react'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
import  {
  Container, Content,
  Header, Body, Title,
  View, Text
} 														from 'native-base'


class ErrorScreenView extends Component {
	static propTypes = {
		header:    PT.bool,
		errorText: PT.string
	}

  renderHeader() {
    return (
      <Header
        style={{backgroundColor: myTheme.primary}}
        iosBarStyle="light-content">
        <Body>
          <Title style={{color: myTheme.light}}>
            { I18n.t('title') }
          </Title>
        </Body>
      </Header>
    )
  }

  render() {
    return (
      <Container theme={ myTheme }>
        <View style={styles.mainContainer}>
          { (this.props.header) ? this.renderHeader() : null }

          <View style={styles.container}>
            <Text style={styles.text}>
              { this.props.errorText || I18n.t('app.errorText') }
            </Text>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = {
  mainContainer: {
    flex:1
  },
	container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 50
  },
  text: {
    fontWeight: 'bold'
  }
}

export default ErrorScreenView
