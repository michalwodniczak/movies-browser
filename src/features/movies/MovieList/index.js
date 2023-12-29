import { useSelector } from "react-redux";
import { selectMovieList, selectLoading } from "./movieListSlice";
import Pagination from '../../../common/Pagination/index';

function MovieList() {
    const popularMovies = useSelector(selectMovieList);
    const loading = useSelector(selectLoading);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!popularMovies) {
        return <p>No data available.</p>;
    }
    return (
        <>
            {/* <Navigation /> */}
            <div>
                <h1>Popular Movies</h1>
                <ul>
                    {popularMovies.map((movie) => (
                        <li key={movie.id}>
                            <div>
                                <img
                                    src={movie.poster_path}
                                    alt={movie.title}
                                />
                                <p>{movie.title}</p>
                                <p>{`⭐ ${movie.vote_average}`}</p>
                                <p>{`${movie.vote_count} votes`}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
            {/* <Pagination /> */}
        </>
    );
};

export default MovieList;
