import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import movieListReducer from '../features/movies/MovieList/movieListSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movieList: movieListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;