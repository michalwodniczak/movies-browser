import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        path: "",
        inputValue: "",
        data: null,
        status: "",
        genres: [{}],
        totalResults: 0,
        totalPages: 1,
        page: 1,
    },
    reducers: {
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        setLoading: (state, { payload: data }) => {
            state.status = "loading"
            state.data = data;
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
        incrementPage: (state) => {
            state.page += 1;
            state.status = "loading";
        },
        decrementPage: (state) => {
            state.page -= 1;
            state.status = "loading";
        },
        goToFirstSearchPage: (state) => {
            state.page = 1;
            state.status = "loading";
        },
        goToLastSearchPage: (state, { payload: lastPage }) => {
            state.page = +lastPage;
            state.status = "loading";
        }
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
    setLoading,
    setTotalPages,
    setTotalResults,
    incrementPage,
    decrementPage,
    goToFirstSearchPage,
    goToLastSearchPage,
} = searchSlice.actions;

export default searchSlice.reducer;