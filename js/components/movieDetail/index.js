
import React, {
    Component, PropTypes as PT
}                               from "react"
import { connect }              from 'react-redux'
import I18n                     from 'react-native-i18n'
import { Image }                from 'react-native'
import  {
  Container, Content,
  Text, View, Icon
} 														  from 'native-base'
import myTheme                  from '../../themes/base-theme'
import Tabs                     from '../tabs'
import SearchBar                from '../searchBar'
import { deselectMovie }        from '../../actions/movies'
import { getMovieById }         from '../../selectors'
import styles                   from './style'


class MovieDetail extends Component {
	static propTypes = {
    movie:          PT.object,
    deselectMovie:  PT.func
  }

  componentWillUnmount() {
    return this.props.deselectMovie()
  }

  renderGenres() {
    return this.props.movie.genres.map((genre, i) => {
      return (
        <View key={i} style={styles.genresBubble}>
          <Text style={styles.genresText}>
            { genre }
          </Text>
        </View>
      )
    })
  }

  render() {
		const { movie } = this.props

    return (
      <Container theme={ myTheme } style={styles.mainContainer}>
        <SearchBar
          back={true}
          search={false}
          title={movie.title}
          backgroundColor={movie.colors.MAIN}
          titleColor={movie.colors.TITLE}
        />
        <Content>
          <Image
            style={styles.image}
            defaultSource={require('../../images/backdrop.png')}
            source={{uri: movie.images.BACKDROP}}
          />
          <View style={styles.movieData}>
            <View
              shadowColor={myTheme.secondaryText}
              shadowOffset={{width: 1, height: 1}}
              shadowOpacity={1}
              shadowRadius={10}
              style={styles.poster}>
              <Image
                style={{flex:1}}
                defaultSource={require('../../images/cinecor.png')}
                source={{uri: movie.images.POSTER}}
              />
            </View>
            <View style={styles.movieDataContainer}>
              <Text style={styles.releaseDate}>
                { new Date(movie.releaseDate).toDateString() }
              </Text>

              <Text style={styles.duration}>
                { movie.duration } { I18n.t('app.movie.mins') }
              </Text>

              <View style={styles.ratingContainer}>
                <Icon name="ios-star" style={styles.ratingStar} />
                <Text style={styles.rating}>
                  { movie.rating.toFixed(1) }
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.genresContainer}>
            { this.renderGenres() }
            </View>

            <View style={styles.body}>
              <Text>
               { movie.overview }
              </Text>
            </View>
          </View>
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
