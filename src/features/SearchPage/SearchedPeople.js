import { useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { StyledLink } from "../../common/Tile/styled";
import { ListTileSmall } from "../../common/Tile";
import { SmallListWrapper } from "../../common/Tile/styled";
import Pagination from '../../common/Pagination';
import {
    incrementPage,
    decrementPage,
    goToFirstSearchPage,
    goToLastSearchPage,
    selectCurrnetPage,
    selectTotalPages,
} from '../SearchPage/searchSlice'

export const SearchedPeople = ({ searchQuery, searchResults, totalResults }) => {
    const result = searchResults;
    const currentPage = useSelector(selectCurrnetPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <Main>
            <Section>
                <SectionTitle>{`Search result for "${searchQuery}" (${totalResults})`}</SectionTitle>
                <SmallListWrapper>
                    {searchResults.map((person) => (
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
                goToFirstPage={goToFirstSearchPage}
                incrementPage={incrementPage}
                decrementPage={decrementPage}
                goToLastPage={goToLastSearchPage}
                totalPages={totalPages}
            />
        </Main>
    );
};