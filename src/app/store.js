import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from "../common/Pagination/paginationSlice"; 
import peopleReducer from '../features/people/peopleSlice';

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        people: peopleReducer,
    }
});
