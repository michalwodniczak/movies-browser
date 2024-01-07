import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        loading: true,
        page: 1,
		peopleList: {
			page: 1,
			results: [{}],
		},
    },
	reducers: {
		incrementPage: (state) => {
			state.page += 1;
		},
		decrementPage: (state) => {
			state.page -= 1;
		},
        goToFirstPage: (state) => {
            state.page = 1;
        },
		goToLastPage: (state, {payload: lastPage}) => {
            state.page = +lastPage;
        },
		pageNumberFromURL: (state, { payload: query }) => {
			state.page = +query;
		},
		setPeopleList: (state, {payload: peopleList}) => {
            state.peopleList = peopleList;
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
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPageState = (state) => selectPeopleState(state).page;
export const selectPeopleList = (state) => selectPeopleState(state).peopleList.results;

export default peopleSlice.reducer;