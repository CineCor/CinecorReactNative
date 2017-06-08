
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import myTheme                from '../../themes/base-theme'
import  {
  Container, Content,
	Spinner
} 														from 'native-base'

import { Dimensions }	from 'react-native'
const { width }		  = Dimensions.get('window')

class Loading extends Component {

  render() {
    return (
      <Container theme={ myTheme } style={{width}}>
				<Content>
						<Spinner color={myTheme.primary} />
				</Content>
      </Container>
    )
  }
}

export default Loading
