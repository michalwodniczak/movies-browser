import { createSlice } from "@reduxjs/toolkit";
import { createPaginationActions } from '../../../common/Pagination/createPaginationActions';

const { paginationReducers } = createPaginationActions('peopleSlice');

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
        ...paginationReducers,
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