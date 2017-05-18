import React, {
	Component, PropTypes as PT
}                               from "react"
import { ListView, Text, View } from "react-native"
import { connect }              from "react-redux"
import I18n                     from 'react-native-i18n'

import Loading                  from '../loading'
import ErrorScreenView          from '../errorScreenView'
import Movie                    from '../movie'
import { globalNav }            from '../../AppNavigator'
import { selectMovie }          from '../../actions/movies'

import styles from "./style"

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            })
        }
    }

    detail(id) {
        this.props.selectMovie(id)
        globalNav.navigator.push({ id: "MovieDetail", passProps: { id } })
    }

    renderMovie(movie) {
        return (
            <Movie
                id={movie.id}
                image={movie.images.BACKDROP}
                title={movie.title}
                hours={movie.hours}
                detail={() => this.detail(movie.id)}
            />
        )
    }

    render() {
        const { received, movies, searchWords } = this.props

        if (!received) return <Loading />

        const dataSource = this.state.dataSource.cloneWithRows(movies)
        
        if (dataSource._cachedRowCount === 0 && searchWords.length > 0) {
            return  (
                <ErrorScreenView
                    errorText={ I18n.t('app.emptySearch') }
                    header='false'
                />
            )
        }

        return (
            <View style={{flex: 1}}>
                <ListView
                    style={{backgroundColor: "#f4f4f4"}}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    style={styles.listView}
                    renderRow={this.renderMovie.bind(this)}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    searchWords:    state.search.words,
    received:       state.cinemas.received
})

const mapDispatchToProps = (dispatch) => ({
    selectMovie: id => dispatch(selectMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
