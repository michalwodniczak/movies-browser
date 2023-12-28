import { createSlice } from "@reduxjs/toolkit";
import { backdropURL, posterURL } from "../../utils/API/APIURLS";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        loading: true,
        id: '',
        details: {},
        credits: {},
    },
    reducers: {
        setMovieId: (state, {payload: id}) => {
            state.id = id;
        },
        setMovieDetails: (state, {payload: movieDetails}) => {
            state.details = movieDetails;
            state.loading = false;
        },
        setMovieCredits: (state, {payload: movieCredits}) => {
            state.credits = movieCredits;
        },
    },
});

export const {
    setMovieId,
    setMovieDetails,
    setMovieCredits,
} = movieSlice.actions;

const selectMovieState = state => state.movie;
const selectDetails = state => selectMovieState(state).details;
const selectCredits = state => selectMovieState(state).credits;

export const selectLoading = state => selectMovieState(state).loading;

export const selectMovieDetails = state => {
    const title = selectDetails(state).original_title;
    const ratingValue = selectDetails(state).vote_average;
    const voteCount = selectDetails(state).vote_count;
    const overview = selectDetails(state).overview;
    const releaseDate = selectDetails(state).release_date;
    const production = selectDetails(state).production_countries;
    const genres = selectDetails(state).genres;
    const backdropPath = selectDetails(state).backdrop_path;
    const posterPath = selectDetails(state).poster_path;

    return ({
        title: title,
        rating: ratingValue,
        votes: voteCount,
        date: releaseDate,
        production: production,
        genres: genres,
        description: overview,
        posterURL: `${posterURL}${posterPath}`,
        backdropURL: `${backdropURL}${backdropPath}`,
    })
};

export const selectMovieCast = state => selectCredits(state).cast;
export const selectMovieCrew = state => selectCredits(state).crew;

export default movieSlice.reducer;