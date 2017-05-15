import { takeEvery }            from 'redux-saga'
import { call, put }            from 'redux-saga/effects'
import * as cinemaActions       from '../../actions/cinemas'
import * as loginActions       	from '../../actions/login'
import * as Types               from '../../types'
import firebase                 from 'firebase'


function signInAnonymously() {
  const database = firebase.database()
  return firebase.auth().signInAnonymously()
}

function* signIn() {
    try {
      const user = yield call(signInAnonymously)

      if (user) {
        yield put( loginActions.signInSuccess(user) )
        yield put( cinemaActions.fetchCinemas() )
      }
    }
    catch (error) {
        console.log(error)
    }
}

function* watchSignIn() {
    yield* takeEvery(Types.SIGN_IN, signIn)
}

export default watchSignIn
