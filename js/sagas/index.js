import { fork }             from 'redux-saga/effects'
import watchFetchCinemas    from "./cinemas"

export default function* root() {
    yield [
        fork(watchFetchCinemas)
    ]
}
