import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import {
    selectStatus,
    selectDetails,
    getDetailsForPerson,
    selectPersonCast,
    selectPersonCrew,
    setError,
} from "./peopleDetailsSlice";
import { DetailsTile, ListTileLarge } from "../../../common/Tile/index";
import { Section, SectionTitle } from '../../../common/Section/Section';
import { LargeListWrapper, StyledLink } from "../../../common/Tile/styled";
import { Main } from "../../../common/Main/Main";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import AnimatedPage from "../../../common/AnimatedPage";
import { goToFirstSearchPage, selectInputValue, setInputValue, selectData } from "../../../Navigation/Search/searchSlice";
import { SearchPage } from "../../../Navigation/Search/SearchPage";


const PersonDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        dispatch(getDetailsForPerson({ personId: id }));
    }, [id, dispatch]);

    useEffect(() => {
        dispatch(setInputValue(``));
        dispatch(goToFirstSearchPage());
    }, [location.pathname]);

    const details = useSelector(selectDetails);
    const status = useSelector(selectStatus);
    const actorCast = useSelector(selectPersonCast);
    const actorCrew = useSelector(selectPersonCrew);
    const searchResults = useSelector(selectData);
    const searchQuery = useSelector(selectInputValue);

    if (searchQuery && searchResults) {
        return <SearchPage />
    }

    switch (status) {
        case "loading":
            return <Loading />;
        case "error":
            return <Error error={{
                message: 'Error fetching person detail data',
                setError: (error) => dispatch(setError(error))
            }} />;
        default:
            return (
                <AnimatedPage>
                    <Main>
                        <DetailsTile
                            posterPath={details.posterPath}
                            title={details.name}
                            description={details.biography}
                            firstData={details.birthday || "No date of birth available"}
                            secondData={details.birthplace || "No place of birth available"}
                        />
                        <Section>
                            <SectionTitle>
                                {`Movies - cast (${actorCast.length})`}
                            </SectionTitle>
                            <LargeListWrapper>
                                {actorCast.map((cast) => (
                                    <li key={cast.creditID}>
                                        <StyledLink to={`/movies/${cast.id}`}>
                                            <ListTileLarge
                                                posterPath={cast.posterPath}
                                                title={cast.title}
                                                role={cast.role}
                                                subtitle={cast.year || "No release year available"}
                                                tags={cast.namedGenres}
                                                voteCount={cast.votes}
                                                ratingValue={cast.rating}
                                            />
                                        </StyledLink>
                                    </li>
                                ))}
                            </LargeListWrapper>
                        </Section>
                        <Section>
                            <SectionTitle>
                                {`Movies - crew (${actorCrew.length})`}
                            </SectionTitle>
                            <LargeListWrapper>
                                {actorCrew.map((crew) => (
                                    <li key={crew.creditID}>
                                        <StyledLink to={`/movies/${crew.id}`}>
                                            <ListTileLarge
                                                posterPath={crew.posterPath}
                                                title={crew.title}
                                                role={crew.role}
                                                subtitle={crew.year || "No release year available"}
                                                tags={crew.namedGenres}
                                                voteCount={crew.votes}
                                                ratingValue={crew.rating}
                                            />
                                        </StyledLink>
                                    </li>
                                ))}
                            </LargeListWrapper>
                        </Section>
                    </Main>
                </AnimatedPage>
            )
    }
};

export default PersonDetails;