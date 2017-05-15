import * as Types from "../../types"

const initialState = {
    isAuthenticated: false,
    profile: {}
}

const User = (state = initialState, action) => {
    switch (action.type) {

        // USER
        case Types.SIGN_IN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            profile: action.user
        }

        default: return state
    }
}

export default User
