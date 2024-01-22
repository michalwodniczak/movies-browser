import { all, put, call, debounce, takeEvery, select } from "redux-saga/effects";
import {
    fetchDataSucces,
    fetchDataFailure,
    setGenres,
    setInputValue,
    selectPath,
    setTotalPages,
    selectInputValue,
    selectCurrnetPage,
    incrementPage,
    decrementPage,
    goToLastSearchPage,
    goToFirstSearchPage,
} from "./searchSlice";
import { getSearchResults } from "../../utils/API/getSearchResults";
import { getGenreList } from "../../utils/API/getGenreList";
import { processSearchResults } from "../../utils/API/processApiData";

function* fetchDataHandler() {
    try {
        const [query, path, page] = yield all([
            select(selectInputValue),
            select(selectPath),
            select(selectCurrnetPage),
        ]);
        const [rawSearchResults, rawGenreList] = yield all([
            call(getSearchResults, query, path, page),
            call(getGenreList),
        ]);
        const result = yield call(
            processSearchResults,
            rawSearchResults,
            rawGenreList,
            path
        );
        yield all([
            put(fetchDataSucces(result)),
            put(setGenres(rawGenreList)),
            put(setTotalPages(rawSearchResults)),
        ]);

    } catch (error) {
        yield put(fetchDataFailure(error.message));
    };
};

export function* searchSaga() {
    yield debounce(
        500,
        setInputValue,
        fetchDataHandler);

    yield takeEvery(
        [
            incrementPage,
            decrementPage,
            goToFirstSearchPage,
            goToLastSearchPage
        ],
        fetchDataHandler);
};