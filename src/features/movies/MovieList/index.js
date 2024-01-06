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
import { posterURL } from "../../../utils/API/APIURLS";
import pageLimit from "../../../utils/pageLimit";
import { Main } from "../../../common/Main/Main";
import { Section, SectionTitle } from "../../../common/Section/Section";
import { 
	NoMovieIcon, 
	SectionWrapper, 
	StyledLink, 
	Tile, 
	TileImage, 
	TileImageContainer, 
	TileTags, 
	TileTag, 
	TileTitle, 
	TileSubTitle, 
	RatingContainer, 
	TileContent 
} from "./styled";
import Pagination from '../../../common/Pagination/index';
import { Container, SpinnerIcon } from '../../../common/Loading/Loading';
import Rating from '../../../common/Rating/Rating';

function MovieList() {
	const dispatch = useDispatch();
	const currentPage = useSelector(selectPageState);
	const popularMovies = useSelector(selectMovieList);
	const loading = useSelector(selectLoading);

	const history = useHistory();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get('page');

  useEffect(() => {
    if (query < 1) {
      searchParams.set('page', 1);
    } if (query > pageLimit) {
      searchParams.set('page', pageLimit);
    } else {
      dispatch(pageNumberFromURL(Math.floor(query)));
    }
  }, [query]);

	useEffect(() => {
		history.push(`${location.pathname}?page=${currentPage}`);
	}, [currentPage]);

	if (loading) {
		return (
			<Container>
				<SpinnerIcon />
			</Container>
		);
	}
	if (!popularMovies) {
		return <p>No data available.</p>;
	}
	return (
		<Main>
			<Section>
				<SectionTitle>
					Popular Movies
				</SectionTitle>
				<SectionWrapper>
					{popularMovies.map((movie) => (
						<li key={movie.id}>
							<StyledLink as={Link} to={`/movies/${movie.id}`}>
								<Tile >
									<TileImageContainer>
										{movie.posterPath
											?
											<TileImage
												src={`${posterURL}${movie.posterPath}`}
												alt=""
											/>
											:
											<NoMovieIcon />
										}
									</TileImageContainer>
									<TileContent>
										<TileTitle>{movie.title}</TileTitle>
										<TileSubTitle>{movie.year}</TileSubTitle>
										<TileTags>
											{
												movie.namedGenres &&
												movie.namedGenres.map(name => (
													<TileTag>{name}</TileTag>
												))
											}
										</TileTags>
										<RatingContainer>
											<Rating
												voteCount={movie.votes}
												ratingValue={movie.rating}
											/>
										</RatingContainer>
									</TileContent>
								</Tile>
							</StyledLink>

						</li>
					))}
				</SectionWrapper>
			</Section>
			<Pagination
				currentPage={currentPage}
				goToFirstPage={goToFirstPage}
				incrementPage={incrementPage}
				decrementPage={decrementPage}
			/>
		</Main>
	);
};

export default MovieList;
