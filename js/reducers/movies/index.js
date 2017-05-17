import * as Types from "../../types"

const initialState = {
    selected: null
}

const Movies = (state = initialState, action) => {
    switch (action.type) {

        // MOVIES

        case Types.SELECT_MOVIE:
            return {
                ...state,
                selected: action.id
            }

        case Types.DESELECT_MOVIE:
            return initialState

        default: return state
    }
}

export default Movies
