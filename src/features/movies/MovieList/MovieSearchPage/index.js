import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectData, selectInputValue } from "../../../../Navigation/Search/searchSlice";
import { Section, SectionTitle } from "../../../../common/Section/Section";
import { posterURL } from "../../../../utils/API/APIURLS";
import { Wrapper } from "./styled";
import { NoMovieIcon, SectionWrapper, StyledLink, Tile, TileContent, TileTitle, TileSubTitle, TileTags, TileTag, TileImageContainer, TileImage, Rating, } from "../../MovieList/styled";
import errorImage from "./noResult.png";

export const SearchPage = () => {
    const searchQuery = useSelector(selectInputValue);

    const searchResults = useSelector(selectData);
    if (!searchResults.data.length) {
        return (
            <Section>
                <SectionTitle>Sorry, there are no results for "{searchQuery}"</SectionTitle>
                <Wrapper>
                    <img src={errorImage} alt="" />
                </Wrapper>
            </Section>
        );
    };

    return (
        <Section>
            <SectionTitle>Search result for "{searchQuery}" ({searchResults.data.length})</SectionTitle>
            <SectionWrapper>
                {searchResults.data.map((movie) => (
                    <li key={movie.id}>
                        <StyledLink as={Link} to={`/movies/${movie.id}`}>
                            <Tile >
                                <TileImageContainer>
                                    {movie.poster_path
                                        ?
                                        <TileImage
                                            src={`${posterURL}${movie.poster_path}`}
                                            alt=""
                                        />
                                        :
                                        <NoMovieIcon />
                                    }
                                </TileImageContainer>
                                <TileContent>
                                    <TileTitle>{movie.title}</TileTitle>
                                    <TileSubTitle>{movie.release_date}</TileSubTitle>
                                    <TileTags>
                                        {
                                            movie.genre_ids &&
                                            <TileTag>{movie.genre_ids}</TileTag>
                                        }
                                    </TileTags>
                                    <Rating><span>{`⭐ ${movie.vote_average}`}</span>
                                        <span>{`${movie.vote_count} votes`}</span></Rating>
                                </TileContent>
                            </Tile>
                        </StyledLink>
                    </li>
                ))}
            </SectionWrapper>
        </Section>
    );
};