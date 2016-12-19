
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { actions }            from 'react-native-navigation-redux-helpers';
import myTheme                from '../../themes/base-theme';
import  {
  Container, Content,
  Text
} from 'native-base';


const {
  pushRoute,
  replaceAt,
} = actions;

class Index extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('index', { key: route }, this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={myTheme}>
        <Content>
          <Text style={{ marginTop: 180, marginLeft: 22, fontSize: 22, fontWeight: 'bold' }}>
            React Native - NativeBase Seed
          </Text>
        </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Index);
