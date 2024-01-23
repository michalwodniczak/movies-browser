export const createPaginationActions = () => {
	const paginationReducers = {
		incrementPage: (state) => {
			state.page += 1;
		},
		decrementPage: (state) => {
			state.page -= 1;
		},
		goToFirstPage: (state) => {
			state.page = 1;
		},
		goToLastPage: (state, { payload: lastPage }) => {
            state.page = +lastPage;
            state.status = "loading";
        },
        pageNumberFromURL: (state, { payload: query }) => {
            state.page = +query;
            state.status = "loading";
        },
	};

	return { paginationReducers };
};
