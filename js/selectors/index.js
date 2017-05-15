import { createSelector } from 'reselect'

const cinemasSelector = state => state.cinemas.items
const cinemasSelectedIdSelector = state => state.cinemaSelected.selected
const isReceived = state => state.cinemas.received
const searchedWords = state => state.search.words

const filterCinemas = createSelector(
  cinemasSelector,
	cinemasSelectedIdSelector,
  isReceived,
  searchedWords,
  (cinemas, id, received, words) => {
    if (!received) return []

    const moviesOfSelectedCinema = cinemas.filter(cinema => cinema.id === id)[0].movies

    return moviesOfSelectedCinema.filter( movie => movie.title.toLowerCase().indexOf(words) != -1)
  }
)

const orderCinemas = cinemas => {
  return cinemas.sort((a, b) => a.id - b.id)
}

const isAuthenticated = user => {
  return user.authenticated;
}


export {
  filterCinemas,
  orderCinemas,
	isAuthenticated
}
