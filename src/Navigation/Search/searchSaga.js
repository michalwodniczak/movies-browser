import { all, put, call, debounce } from "redux-saga/effects";
import { fetchDataSucces, fetchDataFailure, fetchData, setGenres, setMoviesList } from "./searchSlice";
import { getSearchMovie } from "./getSearch";
import { getGenreList } from "../../features/movies/MovieList/getGenreList";
import { customiseMovieList } from "../../features/movies/MovieList/customiseMovieList";

function* fetchDataHandler(action) {
    try {
        yield call(fetchData);
        const [movieList, genreList] = yield all([
            call(getSearchMovie, action.payload.query),
            call(getGenreList),
        ]);
        const movies = yield call(customiseMovieList, movieList, genreList);
        // yield put(fetchDataSucces({ data: result }));
    
        yield put(setMoviesList(movies));
        yield put(setGenres(genreList));
    } catch (error) {
        yield put(fetchDataFailure({ error }));
    };
};

export function* searchSaga() {
    yield debounce(1500, fetchData.type, fetchDataHandler);
};
