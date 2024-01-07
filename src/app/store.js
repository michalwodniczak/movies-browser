import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import movieListReducer from '../features/movies/MovieList/movieListSlice';
import movieReducer from '../features/movies/movieSlice';
import peopleReducer from '../features/people/peopleSlice';
import searchReducer from "../Navigation/Search/searchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        movie: movieReducer,
        people: peopleReducer,
        search: searchReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
