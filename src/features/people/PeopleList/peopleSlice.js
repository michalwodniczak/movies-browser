import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        page: 1,
        peopleList: {
            page: 1,
            results: [{}],
        },
        status: "loading",
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
            state.status = "loading";
        },
        decrementPage: (state) => {
            state.page -= 1;
            state.status = "loading";
        },
        goToFirstPage: (state) => {
            state.page = 1;
            state.status = "loading";
        },
        goToLastPage: (state, { payload: lastPage }) => {
            state.page = +lastPage;
            state.status = "loading";
        },
        pageNumberFromURL: (state, { payload: query }) => {
            state.page = +query;
            state.status = "loading";
        },
        setPeopleList: (state, { payload: peopleList }) => {
            state.peopleList = peopleList;
            state.status = peopleList ? "success" : "error";
        },
        setError: (state, { payload: error }) => {
            state.error = error.message;
            state.status = error.status || "error";
        },
    },
});

export const {
    incrementPage,
    decrementPage,
    goToFirstPage,
    goToLastPage,
    pageNumberFromURL,
    setPeopleList,
    setError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPageState = (state) => selectPeopleState(state).page;
export const selectPeopleList = (state) => selectPeopleState(state).peopleList.results;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectError = state => selectPeopleState(state).error;

export default peopleSlice.reducer;