
import { combineReducers }  from 'redux'
import cinemas              from './cinemas'
import cinemaSelected       from './cinemaSelected'
import tabs       					from './tabs'
import search       				from './search'
import user       					from './user'
import movies       				from './movies'

export default combineReducers({
	cinemas,
	cinemaSelected,
	tabs,
	search,
	user,
	movies
});
