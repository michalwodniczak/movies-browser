import { useSelector } from "react-redux";
import { selectData, selectInputValue } from "../searchSlice";
import { Main } from "../../../common/Main/Main";
import { Section, SectionTitle } from "../../../common/Section/Section";
import { StyledLink } from "../../../common/Tile/styled";
import { ListTileLarge } from "../../../common/Tile";
import { LargeListWrapper } from "../../../common/Tile/styled";
import { selectStatus } from "../../../features/movies/MovieList/movieListSlice";
import { NoResults } from "../NoResults";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

export const SearchPage = () => {
    const searchQuery = useSelector(selectInputValue);
    const searchResults = useSelector(selectData);
    const status = useSelector(selectStatus);

    if (!searchResults.length && status !== "loading") {
        return (
            <NoResults />
        );
    };

    switch (status) {
        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        default:
            return (
                <Main>
                    <Section>
                        <SectionTitle>Search result for "{searchQuery}" ({searchResults.length})</SectionTitle>
                        <LargeListWrapper>
                            {searchResults.map((movie) => (
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
};