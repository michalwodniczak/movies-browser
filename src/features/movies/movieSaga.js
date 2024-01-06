import { all, call, put, takeEvery, delay, select } from 'redux-saga/effects'
import { setMovieId, setMovieDetails, setMovieCredits, selectMovieId } from './movieSlice'
import { getMovieDetails, getMovieCredits } from './getMovieDetails'

function* fetchMovieHandler() {
    try {
        const movieId = yield select(selectMovieId);
        const [details, credits] = yield all ([
            call(getMovieDetails, movieId),
            call(getMovieCredits, movieId),
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