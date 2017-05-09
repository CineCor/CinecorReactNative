import { createSelector } from 'reselect'

const cinemasSelector = state => state.cinemas.items
const cinemasSelectedIdSelector = state => state.cinemaSelected.selected
const isReceived = state => state.cinemas.received

const filterCinemas = createSelector(
  cinemasSelector,
	cinemasSelectedIdSelector,
  isReceived,
  (cinemas, id, received) => (received) ? cinemas.filter(cinema => cinema.id === id)[0].movies : []
)

const orderCinemas = cinemas => {
  return cinemas.sort((a, b) => a.id - b.id)
}


export {
  filterCinemas,
  orderCinemas
}
