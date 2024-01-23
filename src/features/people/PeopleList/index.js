import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {
  incrementPage,
  decrementPage,
  goToFirstPage,
  goToLastPage,
  selectPageState,
  selectPeopleList,
  selectStatus,
  setError,
} from './peopleSlice';
import { Main } from '../../../common/Main/Main';
import { Section, SectionTitle } from "../../../common/Section/Section";
import { SmallListWrapper, StyledLink } from '../../../common/Tile/styled';
import { ListTileSmall } from '../../../common/Tile';
import { useURLParameter, useUpdatePageFromURL, useReplacePageParameter } from '../../../utils/useURLParams';
import paginationParamName from '../../../utils/paginationParamName';
import Pagination from '../../../common/Pagination';
import Error from '../../../common/Error';
import Loading from '../../../common/Loading';
import AnimatedPage from '../../../common/AnimatedPage';
import { selectInputValue, selectData, setInputValue, goToFirstSearchPage } from '../../../Navigation/Search/searchSlice';
import { SearchPage } from '../../../Navigation/Search/SearchPage';

function PeopleList() {
  const currentPage = useSelector(selectPageState);
  const peopleList = useSelector(selectPeopleList);
  const status = useSelector(selectStatus);
  const searchQuery = useSelector(selectInputValue);
  const searchResults = useSelector(selectData);
  const dispatch = useDispatch();

  const paramValue = useURLParameter(paginationParamName);
  const params = {
    key: "people",
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
    dispatch(setInputValue(""));
    dispatch(goToFirstSearchPage());
  }, []);

  if (searchQuery && searchResults) {
    return <SearchPage />
  }

  switch (status) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error error={{
        message: 'Error fetching people list data',
        setError: (error) => dispatch(setError(error))
      }} />;
    default:
      return (
        <AnimatedPage>
          <Main>
            <Section>
              <SectionTitle>
                Popular People
              </SectionTitle>
              <SmallListWrapper>
                {peopleList.map((person) => (
                  <li key={person.id}>
                    <StyledLink to={`/people/${person.id}`}>
                      <ListTileSmall
                        posterPath={person.profile_path}
                        title={person.name}
                      />
                    </StyledLink>
                  </li>
                ))}
              </SmallListWrapper>
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

export default PeopleList;