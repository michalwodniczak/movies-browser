import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	incrementPage,
	decrementPage,
	goToFirstPage,
	goToLastPage,
	selectMovieList,
	selectPageState,
	selectStatus
} from "./movieListSlice";
import { Main } from "../../../common/Main/Main";
import { Section, SectionTitle } from "../../../common/Section/Section";
import { ListTileLarge } from '../../../common/Tile';
import { StyledLink, LargeListWrapper } from '../../../common/Tile/styled';
import { useURLParameter, useUpdatePageFromURL, useReplacePageParameter } from '../../../utils/useURLParams';
import paginationParamName from '../../../utils/paginationParamName';
import Pagination from '../../../common/Pagination/index';
import Loading from '../../../common/Loading';
import Error from '../../../common/Error';
import AnimatedPage from '../../../common/AnimatedPage';

function MovieList() {
	const currentPage = useSelector(selectPageState);
	const popularMovies = useSelector(selectMovieList);
	const status = useSelector(selectStatus);

	const paramValue = useURLParameter(paginationParamName);
	const params = {
	  key: "movies",
	  value: paramValue,
	};
	const updatePageFromURL = useUpdatePageFromURL();
	const replacePageParameter = useReplacePageParameter();
  
	useEffect(() => {
	  updatePageFromURL(params);
	}, [paramValue]);

	useEffect(() => {
		replacePageParameter(currentPage);
	}, [currentPage]);

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
