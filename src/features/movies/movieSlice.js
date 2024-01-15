import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        loading: true,
        id: '',
        details: {},
        credits: {},
        error: null,
    },
    reducers: {
        setMovieId: (state, { payload: id }) => {
            state.id = id;
        },
        setMovieDetails: (state, { payload: movieDetails }) => {
            state.details = movieDetails;
            state.loading = false;
        },
        setMovieCredits: (state, { payload: movieCredits }) => {
            state.credits = movieCredits;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    setMovieId,
    setMovieDetails,
    setMovieCredits,
    setPreparedDetails,
    setError,
} = movieSlice.actions;

const selectMovieState = state => state.movie;
const selectCredits = state => selectMovieState(state).credits;

export const selectLoading = state => selectMovieState(state).loading;
export const selectMovieId = state => selectMovieState(state).id;
export const selectError = state => selectMovieState(state).error;

export const selectMovieDetails = state => selectMovieState(state).details;
export const selectMovieCast = state => selectCredits(state).cast;
export const selectMovieCrew = state => selectCredits(state).crew;

export default movieSlice.reducer;