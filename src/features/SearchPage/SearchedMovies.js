import { useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { LargeListWrapper, StyledLink } from "../../common/Tile/styled";
import { ListTileLarge } from "../../common/Tile/index";
import { 
    selectCurrnetPage, 
    selectTotalPages,
    goToFirstSearchPage, 
    goToLastSearchPage, 
    incrementPage, 
    decrementPage 
} from "../../common/Navigation/Search/searchSlice";
import Pagination from "../../common/Pagination";
import AnimatedPage from "../../common/AnimatedPage";

export const SearchedMovies = ({ searchQuery, searchResults, totalResults }) => {
    const result = searchResults;
    const currentPage = useSelector(selectCurrnetPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <AnimatedPage>
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
        </AnimatedPage>
    );
};