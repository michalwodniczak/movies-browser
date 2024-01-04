import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import movieListReducer from '../features/movies/MovieList/movieListSlice';
import movieReducer from '../features/movies/movieSlice';
import peopleReducer from '../features/people/peopleSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        movie: movieReducer,
        people: peopleReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;