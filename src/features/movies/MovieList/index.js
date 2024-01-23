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
	selectPageState,
	selectStatus
} from "./movieListSlice";
import { Main } from "../../../common/Main/Main";
import { Section, SectionTitle } from "../../../common/Section/Section";
import { ListTileLarge } from '../../../common/Tile';
import { StyledLink, LargeListWrapper } from '../../../common/Tile/styled';
import Pagination from '../../../common/Pagination/index';
import Loading from '../../../common/Loading';
import Error from '../../../common/Error';
import AnimatedPage from '../../../common/AnimatedPage';
import { selectData, selectInputValue, setInputValue, goToFirstSearchPage } from '../../../Navigation/Search/searchSlice';
import { SearchPage } from '../../../Navigation/Search/SearchPage';

function MovieList() {
	const dispatch = useDispatch();
	const currentPage = useSelector(selectPageState);
	const popularMovies = useSelector(selectMovieList);
	const status = useSelector(selectStatus);
	const searchQuery = useSelector(selectInputValue);
	const searchResults = useSelector(selectData);

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

	useEffect(() => {
		dispatch(setInputValue(``));
		dispatch(goToFirstSearchPage());
	}, []);

	if (searchResults && searchQuery) {
		return <SearchPage />
	};

	switch (status) {
		case "loading":
			return <Loading />;
		case "error":
			return <Error />;
		default:
			return (
				<AnimatedPage>
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
				</AnimatedPage>
			)
	}
};

export default MovieList;
