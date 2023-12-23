import { useSelector } from "react-redux";
import { selectMovieList } from "./movieListSlice";

function MovieList() {
    const popularMovies = useSelector(selectMovieList);

    return (
        <>
            <div>
                <h1>Popular Movies</h1>
                <ul>
                    {popularMovies.map((movie) => (
                        <li key={movie.id}>
                            <div
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                vote={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {/* <Pagination /> */}
        </>
    );
};

export default MovieList;