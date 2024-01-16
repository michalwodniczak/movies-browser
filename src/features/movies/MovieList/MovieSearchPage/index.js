import { useSelector } from "react-redux";
import { selectData, selectInputValue } from "../../../../Navigation/Search/searchSlice";
import { Main } from "../../../../common/Main/Main";
import { Section, SectionTitle } from "../../../../common/Section/Section";
import { Wrapper } from "./styled";
import { StyledLink } from "../../../../common/Tile/styled";
import { ReactComponent as IconEmpty } from "../../../../assets/icon-empty.svg";
import { ListTileLarge } from "../../../../common/Tile";
import { LargeListWrapper } from "../../../../common/Tile/styled";


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
                                    posterPath={movie.poster_path}
                                    title={movie.title}
                                    subtitle={movie.release_date}
                                    tags={movie.namedGenres}
                                    voteCount={movie.vote_count}
                                    ratingValue={movie.vote_average}
                                />
                            </StyledLink>
                        </li>
                    ))}
                </LargeListWrapper>
            </Section>
        </Main>
    );
};