import { createSlice } from '@reduxjs/toolkit';
import { createPaginationActions } from '../../../common/Pagination/createPaginationActions';

const { paginationReducers } = createPaginationActions('movieListSlice');

const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        page: 1,
        movies: [{}],
        genres: [{}],
        status: "loading",
    },
    reducers: {
        ...paginationReducers,
        setMovieList: (state, { payload: movies }) => {
            state.movies = movies;
            state.status = "success";
        },
        setGenres: (state, { payload: genreList }) => {
            state.genres = genreList.genres;
            state.status = "success";
        },
        setError: (state, { payload: error }) => {
            state.error = error.message;
            state.status = error.status || "error";
        },
    },
});

export const {
    pageNumberFromURL,
    setMovieList,
    setGenres,
    setError,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieList = (state) => selectMovieListState(state).movies;
export const selectStatus = (state) => selectMovieListState(state).status;
export const selectPageState = (state) => selectMovieListState(state).page;
export const selectError = state => selectMovieListState(state).error;

export default movieListSlice.reducer;