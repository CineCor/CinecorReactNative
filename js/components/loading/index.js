
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import myTheme                from '../../themes/base-theme'
import  {
  Container, Content,
	Spinner
} 														from 'native-base'


class Loading extends Component {

  render() {
    return (
      <Container theme={ myTheme }>
				<Content>
						<Spinner color={myTheme.primary} />
				</Content>
      </Container>
    )
  }
}

export default Loading
