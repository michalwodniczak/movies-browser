import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    incrementPage,
    decrementPage,
    goToFirstPage,
    pageNumberFromURL,
    setPeopleList,
    selectPageState
} from './peopleSlice'
import { getPeopleData } from './getPeopleData';

function* fetchPeopleListHandler() {
    try {
        const page = yield select(selectPageState)
        const peopleList = yield call(getPeopleData, page);
        yield put(setPeopleList(peopleList));
    } catch (error) {
        console.error(error);
        yield call(alert, "Error fetching popular people data!")
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