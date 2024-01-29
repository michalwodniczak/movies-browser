import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMovieList,
  selectStatus,
  setError,
  pageNumberFromURL,
} from "./movieListSlice";
import {
  setInputValue,
  selectData,
} from '../../../common/Navigation/Search/searchSlice';
import {
  useURLParameter,
  useUpdatePageFromURL,
  useReplacePageParameter
} from '../../../utils/useURLParams';
import { Main } from "../../../common/Main/Main";
import { Section, SectionTitle } from "../../../common/Section/Section";
import { ListTileLarge } from '../../../common/Tile';
import { StyledLink, LargeListWrapper } from '../../../common/Tile/styled';
import { SearchPage } from '../../SearchPage';
import paginationParamName from '../../../utils/paginationParamName';
import queryParamName from '../../../utils/queryParamName';
import popularMoviesPathName from '../../../utils/popularMoviesPathName';
import Pagination from '../../../common/Pagination/index';
import Error from '../../../common/Error';
import Loading from '../../../common/Loading';
import AnimatedPage from '../../../common/AnimatedPage';

function MovieList() {
  const dispatch = useDispatch();
  const location = useLocation();

  const popularMovies = useSelector(selectMovieList);
  const status = useSelector(selectStatus);
  const searchResults = useSelector(selectData);

  const updatePageFromURL = useUpdatePageFromURL();
  const replacePageParameter = useReplacePageParameter();
  const query = useURLParameter(queryParamName);
  const pageParam = useURLParameter(paginationParamName);
  const params = {
    key: query ? queryParamName : popularMoviesPathName,
    value: pageParam,
  };

  useEffect(() => {
    replacePageParameter(pageParam);

    if (!query) {
      dispatch(setInputValue(""));
      updatePageFromURL(params);
    } else
      updatePageFromURL(params);
      dispatch(setInputValue(query));
  }, [location]);

  if (searchResults && query) {
    return <SearchPage />
  };

  switch (status) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error error={{
        message: 'Error fetching movie list data',
        setError: (error) => dispatch(setError(error))
      }} />;
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
              pageNumberFromURL={pageNumberFromURL}
            />
          </Main>
        </AnimatedPage>
      )
  }
};

export default MovieList;