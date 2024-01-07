import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { setMovieId, setMovieDetails, setMovieCredits, selectMovieId } from './movieSlice'
import { getMovieDetails, getMovieCredits } from './getMovieDetails'
import { customiseMovieDetails } from './customiseMovieDetails';

function* fetchMovieHandler() {
    try {
        const movieId = yield select(selectMovieId);
        const [details, credits] = yield all ([
            call(getMovieDetails, movieId),
            call(getMovieCredits, movieId),
        ]);
        const customDetails = yield call(customiseMovieDetails, details);
        yield put(setMovieDetails(customDetails));
        yield put(setMovieCredits(credits));

    } catch (error) {
        console.error(error);
        yield call(alert, "Error fetching movie data!");
    }
}

export function* movieSaga() {
    yield takeEvery(setMovieId.type, fetchMovieHandler);
}