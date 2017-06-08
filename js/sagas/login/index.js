import { takeEvery }            from 'redux-saga'
import { call, put }            from 'redux-saga/effects'
import * as cinemaActions       from '../../actions/cinemas'
import * as loginActions       	from '../../actions/login'
import * as Types               from '../../types'
import firebase 							  from '../../firebase'


function signInAnonymously() {
  const isAuthenticated = firebase.auth().authenticated
  if (isAuthenticated) {
    return firebase.auth().currentUser
  }
  return firebase.auth().signInAnonymously()
}

function* signIn() {
  try {
    const user = yield call(signInAnonymously)

    if (user) {
      yield put( loginActions.signInSuccess(user) )
      yield put( cinemaActions.fetchCinemas() )
      yield call( firebase.analytics().setUserId, user.uid )
    }
  }
  catch (error) {
    firebase.crash().report(error)
  }
}

function* watchSignIn() {
  yield* takeEvery(Types.SIGN_IN, signIn)
}

export default watchSignIn
