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
            state.loading = true;
		},
		decrementPage: (state) => {
			state.page -= 1;
            state.loading = true;
		},
        goToFirstPage: (state) => {
            state.page = 1;
            state.loading = true;
        },
        goToLastPage: (state, {payload: lastPage}) => {
            state.page = +lastPage;
            state.loading = true;
        },
		pageNumberFromURL: (state, { payload: query }) => {
			state.page = +query;
            state.loading = true;
		},
		setPeopleList: (state, {payload: peopleList}) => {
            state.peopleList = peopleList;
			state.loading = false;
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
export const selectLoading = (state) => selectPeopleState(state).loading;


export default peopleSlice.reducer;