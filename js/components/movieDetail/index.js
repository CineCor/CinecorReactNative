
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
import Tabs                   from '../tabs'
import SearchBar              from '../searchBar'
import  {
  Container, Content,
  Text
} 														from 'native-base'
import { deselectMovie }      from '../../actions/movies'
import { getMovieById }       from '../../selectors'


class MovieDetail extends Component {

  componentWillUnmount() {
    return this.props.deselectMovie()
  }

  render() {
    return (
      <Container theme={ myTheme }>
        <Content>
          <SearchBar
            back={true}
            title={this.props.movie.title}
            backgroundColor={this.props.movie.colors.MAIN} 
            titleColor={this.props.movie.colors.TITLE_TEXT}
          />
          <Text>

          </Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
    movie: getMovieById(state, state.movies.selected)
})

const mapDispatchToProps = (dispatch) => ({
    deselectMovie: () => dispatch(deselectMovie())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
