import { all, put, call, debounce, select, takeEvery } from "redux-saga/effects";
import {
    fetchDataSucces,
    fetchDataFailure,
    setGenres,
    setInputValue,
    selectInputValue,
    selectPath,
    setTotalPages,
    selectCurrnetPage,
    incrementPage,
    decrementPage,
    goToFirstSearchPage,
    goToLastSearchPage,
    setTotalResults,
    searchPageNumberFromURL,
} from "./searchSlice";
import { getSearch } from "../../../utils/API/getSearch";
import { getGenreList } from "../../../utils/API/getGenreList";
import { processSearchResults } from "../../../utils/API/processApiData";

function* fetchDataHandler() {
    try {
        const [query, path, page] = yield all([
            select(selectInputValue),
            select(selectPath),
            select(selectCurrnetPage),
        ]);
        const [rawSearchResults, rawGenreList] = yield all([
            call(getSearch, query, path, page),
            call(getGenreList),
        ])
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
            put(setTotalResults(rawSearchResults)),
        ]);

    } catch (error) {
        yield put(fetchDataFailure(error.message));
    };
};

export function* searchSaga() {
    yield debounce(500, setInputValue, fetchDataHandler);
    yield takeEvery(
        [
            incrementPage,
            decrementPage,
            goToFirstSearchPage,
            goToLastSearchPage,
            searchPageNumberFromURL,
        ],
        fetchDataHandler
    )
}