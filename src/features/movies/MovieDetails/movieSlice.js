import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        id: '',
        details: {},
        credits: {},
        status: "loading",
    },
    reducers: {
        setMovieId: (state, { payload: id }) => {
            state.id = id;
            state.status = "loading";
        },
        setMovieDetails: (state, { payload: movieDetails }) => {
            state.details = movieDetails;
            state.status = "success";
        },
        setMovieCredits: (state, { payload: movieCredits }) => {
            state.credits = movieCredits;
        },
        setError: (state, { payload: message }) => {
            state.error = message;
            state.status = "error";
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

export const selectStatus = state => selectMovieState(state).status;
export const selectMovieId = state => selectMovieState(state).id;
export const selectError = state => selectMovieState(state).error;

export const selectMovieDetails = state => selectMovieState(state).details;
export const selectMovieCast = state => selectCredits(state).cast;
export const selectMovieCrew = state => selectCredits(state).crew;

export default movieSlice.reducer;