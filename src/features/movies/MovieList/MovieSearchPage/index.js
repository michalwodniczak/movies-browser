import { useSelector } from "react-redux";
import { selectData, selectInputValue } from "../../../../Navigation/Search/searchSlice";
import { Main } from "../../../../common/Main/Main";
import { Section, SectionTitle } from "../../../../common/Section/Section";
import { Wrapper } from "./styled";
import { StyledLink } from "../../../../common/Tile/styled";
import { ReactComponent as IconEmpty } from "../../../../assets/icon-empty.svg";
import { LargeListWrapper } from "../../../../common/Tile/styled";
import { ListTileLarge } from "../../../../common/Tile";

export const SearchPage = () => {
    const searchQuery = useSelector(selectInputValue);

    const searchResults = useSelector(selectData);
    if (!searchResults.data.length) {
        return (
            <Main>
                <Section>
                    <SectionTitle>Sorry, there are no results for "{searchQuery}"</SectionTitle>
                    <Wrapper>
                        <IconEmpty />
                    </Wrapper>
                </Section>
            </Main>
        );
    };

    return (
        <Main>
            <Section>
                <SectionTitle>Search result for "{searchQuery}" ({searchResults.data.length})</SectionTitle>
                <LargeListWrapper>
                    {searchResults.data.map((movie) => (
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