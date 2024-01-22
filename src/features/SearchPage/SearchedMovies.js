import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { StyledLink } from "../../common/Tile/styled";
import { ListTileLarge } from "../../common/Tile";
import { LargeListWrapper } from "../../common/Tile/styled";

export const SearchedMovies = ({ searchQuery, searchResults }) => {

    const result = searchResults;

    return (
        <Main>
            <Section>
                <SectionTitle>{`Search result for "${searchQuery}" (${result.length})`}</SectionTitle>
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
        </Main>
    );
};