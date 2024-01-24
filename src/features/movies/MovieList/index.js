import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementPage,
  decrementPage,
  goToFirstPage,
  goToLastPage,
  selectMovieList,
  selectPageState,
  selectStatus,
  setError,
} from "./movieListSlice";
import {
  setInputValue,
  goToFirstSearchPage,
  selectData,
  selectInputValue
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
import Pagination from '../../../common/Pagination/index';
import Error from '../../../common/Error';
import Loading from '../../../common/Loading';
import AnimatedPage from '../../../common/AnimatedPage';

function MovieList() {
  const currentPage = useSelector(selectPageState);
  const popularMovies = useSelector(selectMovieList);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const searchResults = useSelector(selectData);
  const searchQuery = useSelector(selectInputValue);

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
