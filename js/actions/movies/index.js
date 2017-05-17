import * as Types from "../../types"


export const selectMovie = id => {
    return {
        type: Types.SELECT_MOVIE,
        id
    }
}

export const deselectMovie = () => {
    return {
        type: Types.DESELECT_MOVIE
    }
}
