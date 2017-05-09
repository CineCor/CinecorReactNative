import * as Types from "../../types"

const initialState = {
    selected: 0
}

const Cinemas = (state = initialState, action) => {
    switch (action.type) {

        // CINEMA SELECTED

        case Types.CINEMA_SELECT:
            return {
                ...state,
                selected: action.id
            }

        default: return state
    }
}

export default Cinemas
