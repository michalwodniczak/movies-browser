import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import {
    setMovieId,
    setMovieDetails,
    setMovieCredits,
    selectMovieId,
    setError,
} from './movieSlice'
import { getMovieDetails, getMovieCredits } from '../../../utils/API/getMovieDetails'
import { processMovieData } from '../../../utils/API/processMovieData';

function* fetchMovieHandler() {
    try {
        const movieId = yield select(selectMovieId);
        const [rawDetails, rawCredits] = yield all([
            call(getMovieDetails, movieId),
            call(getMovieCredits, movieId),
        ]);
        const processedDetails = yield call(processMovieData, rawDetails);
        yield put(setMovieDetails(processedDetails));
        yield put(setMovieCredits(rawCredits));

    } catch (error) {
        yield put(setError(error.message));
    }
}

export function* movieSaga() {
    yield takeEvery(setMovieId.type, fetchMovieHandler);
}