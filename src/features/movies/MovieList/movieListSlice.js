import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        page: 1,
        movieList: [],
        status: "loading",
    },
    reducers: {
        fetchMovieList: () => { },

        setMovieList: (state, { payload: movieList }) => {
            state.movieList = movieList;
        },
    },
});

export const {
    fetchMovieList,
    setMovieList,
} = movieListSlice.actions;

export const selectMovieListState = state => state.MovieList;

export const selectMovieList = state => selectMovieListState(state).MovieList;
export const selectStatus = state => selectMovieListState(state).status;

export default movieListSlice.reducer;