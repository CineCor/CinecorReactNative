import * as Types from "../../types"

const initialState = {
    words: ""
}

const Search = (state = initialState, action) => {
    switch (action.type) {

        case Types.SAVE_SEARCH:
            return {
                ...state,
                words: action.words
            }

        case Types.CLEAR_SAVED_SEARCH:
            return initialState

        default: return state
    }
}

export default Search
