import React            from "react"
import Index            from "./components/index"
import MovieDetail      from "./components/movieDetail"
import ErrorScreenView  from "./components/errorScreenView"

const renderScene = (route, navigator) => {
    switch (route.id) {
        case "Index":
            return <Index {...route.props} navigator={navigator} />
        case "MovieDetail":
            return <MovieDetail {...route.props} navigator={navigator} />

        default:
            return <ErrorScreenView {...route.props} navigator={navigator} />
    }
}

export default renderScene
