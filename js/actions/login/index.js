import * as Types from "../../types"

export const signIn = () => ({
    type: Types.SIGN_IN
})

export const signInFailed = error => ({
  type: Types.SIGN_IN_FAILED,
  error
})

export const signInSuccess = user => ({
  type: Types.SIGN_IN_SUCCESS,
  user
})

export const login = () => ({
    type: Types.LOGIN
})
