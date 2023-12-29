import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovieList, selectLoading } from "./movieListSlice";
import { Section, SectionTitle } from "../../../common/Section/Section";
import Pagination from '../../../common/Pagination/index';
import { SectionWrapper, Tile } from "./styled";

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
            <Section>
                <SectionTitle>
                    Popular Movies
                </SectionTitle>
                <SectionWrapper>
                    {popularMovies.slice(0, 4).map((movie) => (
                        <li key={movie.id}>
                            <Tile >
                                <Link as={Link} to={`/movies/${movie.id}`}>
                                    <img
                                        src={movie.poster_path}
                                        alt={movie.title}
                                    />
                                    <p>{movie.title}</p>
                                    <p>{`⭐ ${movie.vote_average}`}</p>
                                    <p>{`${movie.vote_count} votes`}</p>
                                </Link>
                            </Tile>
                        </li>
                    ))}
                </SectionWrapper>
            </Section>
            {/* <Pagination /> */}
        </>
    );
};

export default MovieList;
