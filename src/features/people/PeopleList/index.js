import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  incrementPage,
  decrementPage,
  goToFirstPage,
  goToLastPage,
  pageNumberFromURL,
  selectPageState,
  selectPeopleList,
} from '../peopleSlice';
import { Main } from '../../../common/Main/Main';
import { Section, SectionTitle } from "../../../common/Section/Section";
import { SmallListWrapper, StyledLink } from '../../../common/Tile/styled';
import { ListTileSmall } from '../../../common/Tile';
import Pagination from '../../../common/Pagination';

function PeopleList() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPageState);
  const peopleList = useSelector(selectPeopleList);

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

  return (
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
  )
};

export default PeopleList;