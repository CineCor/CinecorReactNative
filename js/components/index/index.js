
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import myTheme                from '../../themes/base-theme';
import Tabs                   from '../tabs'
import  {
  Container, Content,
  Text
} from 'native-base';


class Index extends Component {

  render() {
    return (
      <Container theme={myTheme}>
        <Content>
          <Tabs />
        </Content>
      </Container>
    );
  }
}

export default Index;
