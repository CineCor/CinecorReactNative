import { fork }             from 'redux-saga/effects'
import watchFetchCinemas    from "./cinemas"
import watchSignIn    			from "./login"

export default function* root() {
    yield [
        fork(watchFetchCinemas),
        fork(watchSignIn)
    ]
}
