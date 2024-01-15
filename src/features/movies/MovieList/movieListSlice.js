import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        page: 1,
        movies: [{}],
        genres: [{}],
        loading: true,
        success: false,
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
        setMovieList: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
            state.success = true;
        },
        setGenres: (state, {payload: genreList}) => {
            state.genres = genreList.genres;
        },
        setLoading: (state, { payload: loading }) => {
            state.loading = loading;
        },
    },
});

export const { 
    incrementPage,
    decrementPage,
    goToFirstPage,
    goToLastPage,
	pageNumberFromURL,
    setMovieList,
    setGenres, 
    setLoading,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieList = (state) => selectMovieListState(state).movies;
export const selectLoading = (state) => selectMovieListState(state).loading;
export const selectPageState = (state) => selectMovieListState(state).page;

export default movieListSlice.reducer;