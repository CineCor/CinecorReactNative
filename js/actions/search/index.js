import * as Types from "../../types"

export const saveSearch = words => ({
    type: Types.SAVE_SEARCH,
    words
})

export const clearSavedSearch = cinemas => ({
    type: Types.CLEAR_SAVED_SEARCH
})
