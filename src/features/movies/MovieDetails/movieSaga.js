import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import {
    setMovieId,
    setMovieDetails,
    setMovieCredits,
    selectMovieId,
    setError,
} from './movieSlice'
import { getMovieDetails, getMovieCredits } from '../../../utils/API/getMovieDetails'
import { processMovieData } from '../../../utils/API/processApiData';

function* fetchMovieHandler() {
    try {
        const movieId = yield select(selectMovieId);
        const [rawDetails, rawCredits] = yield all([
            call(getMovieDetails, movieId),
            call(getMovieCredits, movieId),
        ]);
        const processedDetails = yield call(processMovieData, rawDetails);
        yield all([
            put(setMovieDetails(processedDetails)),
            put(setMovieCredits(rawCredits)),
        ]);

    } catch (error) {
        console.error(error);
        yield put(setError({ message: error.message, status: "error" }));
    }
}

export function* movieSaga() {
    yield takeEvery(setMovieId.type, fetchMovieHandler);
}