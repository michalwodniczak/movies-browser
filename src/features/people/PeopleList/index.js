import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  incrementPage,
  decrementPage,
  goToFirstPage,
  pageNumberFromURL,
  selectPageState,
} from '../peopleSlice';

import { Section, SectionTitle } from "../../../common/Section/Section";
import { SectionWrapper } from "./styled";
import Pagination from '../../../common/Pagination';

function PeopleList() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPageState);
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('page');

  useEffect(() => {
    if (query < 1) {
      searchParams.set('page', 1);
    } else {
      dispatch(pageNumberFromURL(query));
    }
  }, [query]);

  useEffect(() => {

    history.push(`${location.pathname}?page=${currentPage}`);
  }, [currentPage]);


  return (
    <>
      <Section>
        <SectionTitle>
          Popular People
        </SectionTitle>
        <SectionWrapper>
          <ul>
            <li>person 1</li>
            <li>person 2</li>
            <li>person 3</li>
            <li>person 4</li>
            <li>person 5</li>
            <li>person 6</li>
            <li>...</li>
            <li>person 20</li>
          </ul>
        </SectionWrapper>
      </Section>
      <Pagination currentPage={currentPage} goToFirstPage={goToFirstPage} incrementPage={incrementPage} decrementPage={decrementPage}/>
    </>
  )
};

export default PeopleList;