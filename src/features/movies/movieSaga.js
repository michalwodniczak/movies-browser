import { all, call, put, takeEvery, delay } from 'redux-saga/effects'
import { setMovieId, setMovieDetails, setMovieCredits } from './movieSlice'
import { getMovieDetails, getMovieCredits } from './getMovieDetails'

function* fetchMovieHandler() {
    try {
        const [details, credits] = yield all ([
            call(getMovieDetails),
            call(getMovieCredits),
        ]);
        yield delay(1500);
        yield put(setMovieDetails(details));
        yield put(setMovieCredits(credits));
    } catch (error) {
        console.error(error);
        yield call(alert, "Error fetching movie data!");
    }
}

export function* movieSaga() {
    yield takeEvery(setMovieId.type, fetchMovieHandler);
}