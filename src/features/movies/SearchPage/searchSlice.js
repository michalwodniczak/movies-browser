import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        path: "",
        inputValue: "",
        page: 1,
        totalPages: 1,
        data: null,
        genres: [{}],
        status: "",
    },
    reducers: {
        setPath: (state, { payload: path }) => {
            state.path = path;
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
            state.inputValue = query;
            state.status = "loading"
        },
        setGenres: (state, { payload: genresList }) => {
            state.genres = genresList.genres;
        },
        setTotalPages: (state, {payload: result}) => {
            state.totalPages = result.total_pages;
        },
    },
});

const selectSearchState = (state) => state.search;

export const selectPath = (state) => selectSearchState(state).path;
export const selectData = (state) => selectSearchState(state).data;
export const selectInputValue = (state) => selectSearchState(state).inputValue;
export const selectStatus = (state) => selectSearchState(state).status;

export const { 
    setPath, 
    fetchDataFailure, 
    fetchDataSucces, 
    setInputValue,
    setGenres,
    setTotalPages, 
} = searchSlice.actions;

export default searchSlice.reducer