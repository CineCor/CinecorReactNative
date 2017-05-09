import * as Types from "../../types"

export const fetchCinemas = () => ({
    type: Types.FETCH_CINEMAS
})

export const cinemasReceived = cinemas => ({
    type: Types.CINEMAS_RECEIVED,
    cinemas
})

export const fetchCinemasFailed = error => ({
    type: Types.CINEMAS_FETCH_FAILED,
    error
})

export const saveTabs = tabs => ({
    type: Types.SAVE_TABS,
    tabs
})

export const selectCinema = id => ({
    type: Types.CINEMA_SELECT,
    id
})
