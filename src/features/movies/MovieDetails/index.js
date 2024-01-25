import { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMovieId,
  selectMovieDetails,
  selectMovieCast,
  selectMovieCrew,
  selectStatus,
  setError,
} from './movieSlice';
import {
  goToFirstSearchPage,
  selectInputValue,
  setInputValue,
  selectData
} from '../../../common/Navigation/Search/searchSlice';
import { BackdropHeader } from './Backdrop';
import { Main } from '../../../common/Main/Main';
import { Section, SectionTitle } from '../../../common/Section/Section';
import { DetailsTile, ListTileSmall } from '../../../common/Tile';
import { SmallListWrapper, StyledLink } from '../../../common/Tile/styled';
import { SearchPage } from '../../SearchPage';
import Error from '../../../common/Error';
import Loading from '../../../common/Loading';
import AnimatedPage from '../../../common/AnimatedPage';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(setMovieId(id))
    dispatch(setInputValue(``));
    dispatch(goToFirstSearchPage())
    history.push(`${location.pathname}`);
  }, [location.pathname]);

  const status = useSelector(selectStatus);
  const movieDetails = useSelector(selectMovieDetails);
  const movieCast = useSelector(selectMovieCast);
  const movieCrew = useSelector(selectMovieCrew);
  const searchResults = useSelector(selectData);
  const searchQuery = useSelector(selectInputValue);

  if (searchResults && searchQuery) {
    return <SearchPage />
  }

  switch (status) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error error={{
        message: 'Error fetching movie detail data',
        setError: (error) => dispatch(setError(error))
      }} />;
    default:
      return (
        <AnimatedPage>
          {movieDetails.backdropPath &&
            <BackdropHeader
              backgroundURL={movieDetails.backdropURL}
              title={movieDetails.title}
              voteCount={movieDetails.votes}
              ratingValue={movieDetails.rating}
            />
          }
          <Main>
            <DetailsTile
              movieTile={true}
              posterPath={movieDetails.posterPath}
              title={movieDetails.title}
              subtitle={movieDetails.releaseYear}
              firstData={movieDetails.production}
              secondData={movieDetails.releaseDate}
              tags={movieDetails.genres}
              voteCount={movieDetails.votes}
              ratingValue={movieDetails.rating}
              isOnBackdrop={false}
              isOnMainTile={true}
              description={movieDetails.description}
            />
            <Section>
              <SectionTitle>Cast</SectionTitle>
              <SmallListWrapper>
                {movieCast.slice(0, 12).map((actor) => (
                  <li key={actor.credit_id}>
                    <StyledLink to={`/people/${actor.id}`}>
                      <ListTileSmall
                        posterPath={actor.profile_path}
                        title={actor.name}
                        subtitle={actor.character}
                      />
                    </StyledLink>
                  </li>
                ))}
              </SmallListWrapper>
            </Section>
            <Section>
              <SectionTitle>Crew</SectionTitle>
              <SmallListWrapper>
                {movieCrew.slice(0, 6).map((crew) => (
                  <li key={crew.credit_id}>
                    <StyledLink to={`/people/${crew.id}`}>
                      <ListTileSmall
                        posterPath={crew.profile_path}
                        title={crew.name}
                        subtitle={crew.job}
                      />
                    </StyledLink>
                  </li>
                ))}
              </SmallListWrapper>
            </Section>
          </Main>
        </AnimatedPage>
      )
  }
};

export default MovieDetails;