import { createSlice } from "@reduxjs/toolkit";
import { createPaginationActions } from '../../Pagination/createPaginationActions';

const { paginationReducers } = createPaginationActions('movieListSlice');

const searchSlice = createSlice({
    name: "search",
    initialState: {
        path: "",
        inputValue: "",
        data: null,
        status: "",
        genres: [{}],
        totalResults: 0,
        totalPages: 0,
        page: 1,
    },
    reducers: {
        ...paginationReducers,
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        setGenres: (state, { payload: genresList }) => {
            state.genres = genresList.genres;
        },
        setTotalResults: (state, { payload: result }) => {
            state.totalResults = result.total_results;
        },
        setTotalPages: (state, { payload: result }) => {
            state.totalPages = result.total_pages;
        },
        fetchDataSucces: (state, { payload: data }) => {
            state.status = "success";
            state.data = data;
        },
        fetchDataFailure: (state, { payload: message }) => {
            state.data = null;
            state.status = "error";
            state.error = message;
        },
        setInputValue: (state, { payload: query }) => {
            state.status = "loading"
            state.inputValue = query;
        },
    },
});

const selectSearchState = (state) => state.search;

export const selectPath = (state) => selectSearchState(state).path;
export const selectData = (state) => selectSearchState(state).data;
export const selectInputValue = (state) => selectSearchState(state).inputValue;
export const selectStatus = (state) => selectSearchState(state).status;
export const selectCurrnetPage = (state) => selectSearchState(state).page;
export const selectTotalPages = (state) => selectSearchState(state).totalPages;
export const selectTotalResults = (state) => selectSearchState(state).totalResults;

export const {
    setPath,
    fetchDataFailure,
    fetchDataSucces,
    setInputValue,
    setGenres,
    setTotalPages,
    setTotalResults,
    pageNumberFromURL: searchPageNumberFromURL,
} = searchSlice.actions;

export default searchSlice.reducer;