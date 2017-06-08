import { createSelector } from 'reselect'

const cinemasSelector = state => state.cinemas.items
const cinemasSelectedIdSelector = state => state.cinemaSelected.selected
const isReceived = state => state.cinemas.received
const searchedWords = state => state.search.words

const filterCinemas = createSelector(
  cinemasSelector,
  isReceived,
  searchedWords,
  (cinemas, received, words) => {
    if (!received) return []

    const cinemasWithMoviesFiltered = cinemas.map(cinema => {
			return cinema.movies.filter( movie => movie.title.toLowerCase().indexOf(words) != -1)
		})

    return cinemasWithMoviesFiltered
  }
)

const filterCinemasByTab = createSelector(
  cinemasSelector,
  cinemasSelectedIdSelector,
  (cinemas, id) => cinemas[id]
)


const isAuthenticated = user => {
  return user.authenticated
}

const getMovieById = (state, id) => {
    return filterCinemasByTab(state).movies.filter(movie => movie.id === id)[0]
}


export {
  filterCinemas,
	isAuthenticated,
  getMovieById
}
