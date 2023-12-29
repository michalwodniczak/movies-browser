import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchFetchMovieList } from '../features/movies/MovieList/movieListSaga';
import movieListReducer from '../features/movies/MovieList/movieListSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movieList: movieListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchMovieList);

export default store;
