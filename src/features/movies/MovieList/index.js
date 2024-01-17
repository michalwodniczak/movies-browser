import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom";
import {
	incrementPage,
	decrementPage,
	goToFirstPage,
	goToLastPage,
	pageNumberFromURL,
	selectMovieList,
	selectLoading,
	selectPageState
} from "./movieListSlice";
import { Main } from "../../../common/Main/Main";
import { Section, SectionTitle } from "../../../common/Section/Section";
import { ListTileLarge } from '../../../common/Tile';
import { StyledLink, LargeListWrapper } from '../../../common/Tile/styled';
import Pagination from '../../../common/Pagination/index';
import { Loading } from '../../../common/Loading';
import { selectData, selectSearchLoading, selectInputValue } from '../../../Navigation/Search/searchSlice';
import { SearchPage } from "../MovieList/MovieSearchPage"

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
			dispatch(pageNumberFromURL(Math.floor(query)));
		}
	}, [query]);

	useEffect(() => {
		history.push(`${location.pathname}?page=${currentPage}`);
	}, [currentPage]);

	if (loading || loadingSearch) {
		return (
			<Loading />
		);
	};

	if (!popularMovies) {
		return <p>No data available.</p>;
	}

	if (searchResults && searchResults.length > 0 && searchQuery) {
		return <SearchPage />
	}

	return (
		<Main>
			<Section>
				<SectionTitle>
					Popular Movies
				</SectionTitle>
				<LargeListWrapper>
					{popularMovies.map((movie) => (
						<li key={movie.id}>
							<StyledLink to={`/movies/${movie.id}`}>
								<ListTileLarge
									posterPath={movie.posterPath}
									title={movie.title}
									subtitle={movie.year}
									tags={movie.namedGenres}
									voteCount={movie.votes}
									ratingValue={movie.rating}
								/>
							</StyledLink>
						</li>
					))}
				</LargeListWrapper>
			</Section>
			<Pagination
				currentPage={currentPage}
				goToFirstPage={goToFirstPage}
				incrementPage={incrementPage}
				decrementPage={decrementPage}
				goToLastPage={goToLastPage}
			/>
		</Main>
	);
};

export default MovieList;
