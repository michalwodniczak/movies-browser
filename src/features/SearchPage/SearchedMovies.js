import { useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { StyledLink } from "../../common/Tile/styled";
import { ListTileLarge } from "../../common/Tile";
import { LargeListWrapper } from "../../common/Tile/styled";
import Pagination from '../../common/Pagination';
import {
    incrementPage,
    decrementPage,
    goToFirstSearchPage,
    goToLastSearchPage,
    selectCurrnetPage,
    selectTotalPages,
} from '../SearchPage/searchSlice'

export const SearchedMovies = ({ searchQuery, searchResults, totalResults }) => {
    const result = searchResults;
    const currentPage = useSelector(selectCurrnetPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <Main>
            <Section>
                <SectionTitle>{`Search result for "${searchQuery}" (${totalResults})`}</SectionTitle>
                <LargeListWrapper>
                    {result.map((movie) => (
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
                goToFirstPage={goToFirstSearchPage}
                incrementPage={incrementPage}
                decrementPage={decrementPage}
                goToLastPage={goToLastSearchPage}
                totalPages={totalPages}
            />
        </Main>
    );
};