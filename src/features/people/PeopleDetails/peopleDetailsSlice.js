import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
    name: "peopleDetails",
    initialState: {
        personId: 0,
        details: {},
        credits: {},
        genres: [{}],
        status: "loading",
    },
    reducers: {
        fetchDataSuccess: (state, { payload: details }) => {          
            state.details = details;
            state.status = "success";
        },
        fetchDataError: (state, { payload: message }) => {
            state.error = message;
            state.status = "error";
        },
        getDetailsForPerson: (state, { payload: id }) => {
            state.personId = id;
            state.status = "loading";
        },
        setPeopleCredits: (state, { payload: peopleCredits }) => {
            state.credits = peopleCredits;
        },
        setGenres: (state, {payload: genreList}) => {
            state.genres = genreList.genres;
        },
    },
});
export const {
    fetchDataSuccess,
    getDetailsForPerson,
    fetchDataError,
    setPeopleCredits,
    setGenres,
} = peopleDetailsSlice.actions;

const selectPersonState = (state) => state.peopleDetails;
const selectCredits = state => selectPersonState(state).credits;

export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectStatus = (state) => selectPersonState(state).status;
export const selectPersonCast = state => selectCredits(state).cast;
export const selectPersonCrew = state => selectCredits(state).crew;

export default peopleDetailsSlice.reducer;