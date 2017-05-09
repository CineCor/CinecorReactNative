import React, {
	Component, PropTypes as PT
}                               from "react"
import { ListView, Text, View } from "react-native"
import { connect }              from "react-redux"

import Movie                    from '../movie'
import { filterCinemas }        from '../../selectors'

import styles from "./style"

class MovieList extends Component {

    detail(id) {
        console.log(id);
    }

    renderMovie(movie) {
        return (
            <Movie
                id={movie.id}
                image={movie.backdropImage}
                title={movie.title}
                hours={movie.hours}
                detail={() => this.detail(movie.id)}
            />
        )
    }

    render() {
        const { received, isFetching, movies } = this.props

        if (!received || !movies) return null

        return (
            <View style={{flex: 1}}>
                <ListView
                    style={{backgroundColor: "#f4f4f4"}}
                    enableEmptySections={true}
                    dataSource={movies}
                    style={styles.listView}
                    renderRow={this.renderMovie.bind(this)}
                />
            </View>
        )
    }
}

const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => ({
    isFetching: state.cinemas.isFetching,
    received:   state.cinemas.received,
    movies:     dataSource.cloneWithRows(filterCinemas(state))
})

// const mapDispatchToProps = (dispatch) => ({
//
// })


export default connect(mapStateToProps, null)(MovieList)
