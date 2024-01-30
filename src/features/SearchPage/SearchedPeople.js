import { useSelector } from "react-redux";
import {
  selectTotalPages,
  searchPageNumberFromURL
} from "../../common/Navigation/Search/searchSlice";
import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { SmallListWrapper, StyledLink } from "../../common/Tile/styled";
import { ListTileSmall, } from "../../common/Tile";
import Pagination from "../../common/Pagination";
import AnimatedPage from "../../common/AnimatedPage";

export const SearchedPeople = (
  {
    searchQuery,
    searchResults,
    totalResults
  }) => {
  const result = searchResults;
  const totalPages = useSelector(selectTotalPages);

  return (
    <AnimatedPage>
      <Main>
        <Section>
          <SectionTitle>
            {`Search result for "${searchQuery}" (${totalResults})`}
          </SectionTitle>
          <SmallListWrapper>
            {result.map((person) => (
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
          totalPages={totalPages}
          pageNumberFromURL={searchPageNumberFromURL}
        />
      </Main>
    </AnimatedPage>
  )
}