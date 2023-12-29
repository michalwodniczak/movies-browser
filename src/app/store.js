import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import paginationReducer from "../common/Pagination/paginationSlice"; 
import peopleReducer from '../features/people/peopleSlice';

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
    reducer: {
        pagination: paginationReducer,
        people: peopleReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;