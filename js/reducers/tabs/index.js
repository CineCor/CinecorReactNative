import * as Types from "../../types"

const initialState = {
    items: []
}

const Tabs = (state = initialState, action) => {
    switch (action.type) {

        // TABS

        case Types.SAVE_TABS:
            return {
                ...state,
                items: action.tabs
            }

        default: return state
    }
}

export default Tabs
