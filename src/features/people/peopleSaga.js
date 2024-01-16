import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    incrementPage,
    decrementPage,
    goToFirstPage,
    pageNumberFromURL,
    setPeopleList,
    selectPageState,
    setError,
} from './peopleSlice'
import { getPopularPeople } from '../../utils/API/getPopularPeople';

function* fetchPeopleListHandler() {
    try {
        const page = yield select(selectPageState)
        const rawPeopleList = yield call(getPopularPeople, page);
        yield put(setPeopleList(rawPeopleList));
    } catch (error) {
        yield put(setError(error.message));
    }
}

export function* peopleSaga() {
    yield takeEvery([
        incrementPage,
        decrementPage,
        goToFirstPage,
        pageNumberFromURL],
        fetchPeopleListHandler);
}