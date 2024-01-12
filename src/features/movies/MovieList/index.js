import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory, Link } from "react-router-dom";
import {
	incrementPage,
	decrementPage,
	goToFirstPage,
	pageNumberFromURL,
	selectMovieList,
	selectLoading,
	selectPageState
} from "./movieListSlice";
import { posterURL } from "../../../utils/API/APIURLS"
import { Section, SectionTitle } from "../../../common/Section/Section";
import { NoMovieIcon, SectionWrapper, StyledLink, Tile, TileImage, TileImageContainer, TileTags, TileTag, TileTitle, TileSubTitle, Rating, TileContent } from "./styled";
import Pagination from '../../../common/Pagination/index';
import { Container, SpinnerIcon } from '../../../common/Loading/Loading';
import { selectData, selectInputValue, selectSearchLoading } from '../../../Navigation/Search/searchSlice';
import { SearchPage } from './MovieSearchPage';

function MovieList() {
	const dispatch = useDispatch();
	const currentPage = useSelector(selectPageState);
	const popularMovies = useSelector(selectMovieList);
	const loading = useSelector(selectLoading);
	const searchResults = useSelector(selectData);
	const loadingSearch = useSelector(selectSearchLoading);
	const searchQuery = useSelector(selectInputValue);

	const history = useHistory();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get('page');

	useEffect(() => {
		if (query < 1) {
			searchParams.set('page', 1);
		} else {
			dispatch(pageNumberFromURL(query));
		}
	}, [query]);

	useEffect(() => {
		history.push(`${location.pathname}?page=${currentPage}`);
	}, [currentPage]);

	if (loading || loadingSearch) {
		return (
			< Section >
				{loadingSearch ? (
					<SectionTitle>{`Search result for ${searchQuery ? `"${searchQuery}"` : ""}`}</SectionTitle>
				) : ""}
				<Container>
					<SpinnerIcon />
				</Container>
			</Section >
		);
	};

	if (!popularMovies) {
		return <p>No data available.</p>;
	}

	if (searchResults) {
		return <SearchPage />
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
							<StyledLink as={Link} to={`/movies/${movie.id}`}>
								<Tile >
									<TileImageContainer>
										{movie.poster_path
											?
											<TileImage
												src={`${posterURL}${movie.poster_path}`}
												alt=""
											/>
											:
											<NoMovieIcon />
										}
									</TileImageContainer>
									<TileContent>
										<TileTitle>{movie.title}</TileTitle>
										<TileSubTitle>{movie.release_date}</TileSubTitle>
										<TileTags>
											{
												movie.genre_ids &&
												<TileTag>{movie.genre_ids}</TileTag>
											}
										</TileTags>
										<Rating><span>{`⭐ ${movie.vote_average}`}</span>
											<span>{`${movie.vote_count} votes`}</span></Rating>
									</TileContent>
								</Tile>
							</StyledLink>

						</li>
					))}
				</SectionWrapper>
			</Section>
			<Pagination currentPage={currentPage} goToFirstPage={goToFirstPage} incrementPage={incrementPage} decrementPage={decrementPage} />        </>
	);
};

export default MovieList;
