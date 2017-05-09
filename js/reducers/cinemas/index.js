import * as Types from "../../types"

const initialState = {
    isFetching: false,
    received: false,
    items: [],
    error: ""
}

const Cinemas = (state = initialState, action) => {
    switch (action.type) {

        // CINEMAS
        case Types.FETCH_CINEMAS:
            return {
                ...state,
                isFetching: true
            }
        case Types.CINEMAS_RECEIVED:
            return {
                ...state,
                items: action.cinemas,
                isFetching: false,
                received: true,
                error: ""
            }

        case Types.CINEMAS_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                received: false,
                error: action.error
            }


        default: return state
    }
}

export default Cinemas
