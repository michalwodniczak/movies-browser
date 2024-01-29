import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPeopleList,
  selectStatus,
  setError,
  pageNumberFromURL,
} from './peopleSlice';
import {
  selectData,
  setInputValue,
} from '../../../common/Navigation/Search/searchSlice';
import {
  useURLParameter,
  useUpdatePageFromURL,
  useReplacePageParameter
} from '../../../utils/useURLParams';
import { Main } from '../../../common/Main/Main';
import { Section, SectionTitle } from "../../../common/Section/Section";
import { SmallListWrapper, StyledLink } from '../../../common/Tile/styled';
import { ListTileSmall } from '../../../common/Tile';
import { SearchPage } from '../../SearchPage';
import paginationParamName from '../../../utils/paginationParamName';
import queryParamName from '../../../utils/queryParamName';
import popularPeoplePathName from '../../../utils/popularMoviesPathName';
import Pagination from '../../../common/Pagination';
import Error from '../../../common/Error';
import Loading from '../../../common/Loading';
import AnimatedPage from '../../../common/AnimatedPage';

function PeopleList() {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const peopleList = useSelector(selectPeopleList);
  const status = useSelector(selectStatus);
  const searchResults = useSelector(selectData);

  const updatePageFromURL = useUpdatePageFromURL();
  const replacePageParameter = useReplacePageParameter();
  const query = useURLParameter(queryParamName);
  const pageParam = useURLParameter(paginationParamName);
  const params = {
    key: query ? queryParamName : popularPeoplePathName,
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
              pageNumberFromURL={pageNumberFromURL}
            />
          </Main>
        </AnimatedPage>
      )
  }
};

export default PeopleList;