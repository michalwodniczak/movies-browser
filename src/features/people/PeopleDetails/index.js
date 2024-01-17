import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectStatus,
    selectDetails,
    getDetailsForPerson,
    selectPersonCast,
    selectPersonCrew,
} from "./peopleDetailsSlice";
import { DetailsTile, ListTileLarge } from "../../../common/Tile/index";
import { Section, SectionTitle } from '../../../common/Section/Section';
import { getGenreList } from "../../movies/MovieList/getGenreList";
import { LargeListWrapper, StyledLink } from "../../../common/Tile/styled";
import { Main } from "../../../common/Main/Main";
import Error from "../../../common/Error";
import { Loading } from "../../../common/Loading";

const PersonDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForPerson({ personId: id }));
    }, [id, dispatch]);

    const details = useSelector(selectDetails);
    const status = useSelector(selectStatus);
    const actorCast = useSelector(selectPersonCast);
    const actorCrew = useSelector(selectPersonCrew);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genresData = await getGenreList();
            setGenres(genresData.genres);
        };
        fetchGenres();
    }, []);

    const nameGenres = (genreIds) => {
        if (!genres || genres.length === 0) {
            return [];
        }

        return genreIds.map((id) => {
            const genre = genres.find((genre) => genre.id === id);
            return genre ? genre.name : '';
        });
    };

    const getReleaseYear = (releaseDate) => {
        const date = new Date(releaseDate);
        return date.getFullYear();
    };

    const formatVote = (vote) => {
        const roundedNumber = vote.toFixed(1);
        const localeString = (number) => number.toLocaleString(
            'pl-PL',
            {
                maximumFractionDigits: 1,
            }
        );

        if (Number.isInteger(vote) || Number.isInteger(+roundedNumber)) {
            return `${localeString(vote)},0`
        } else {
            return localeString(vote)
        };
    };

    return (
        status === "loading" ? <Loading />
            : status === "error" ? <Error />
                : details && (
                    <Main>
                        <DetailsTile
                            posterPath={details.profile_path}
                            title={details.name}
                            description={details.biography}
                            firstData={details.birthday || "No date of birth available"}
                            secondData={details.place_of_birth || "No place of birth available"}
                        />

                        <Section>
                            <SectionTitle>Movies - cast ({actorCast.length})</SectionTitle>
                            <LargeListWrapper>
                                {actorCast.slice(0, 12).map((cast) => (
                                    <li key={cast.credit_id}>
                                        <StyledLink to={`/movies/${cast.id}`}>
                                            <ListTileLarge
                                                posterPath={cast.backdrop_path}
                                                title={cast.title}
                                                subtitle={getReleaseYear(cast.release_date) || "No release year available"}
                                                tags={nameGenres(cast.genre_ids)}
                                                voteCount={cast.vote_count}
                                                ratingValue={formatVote(cast.vote_average)}
                                            />
                                        </StyledLink>
                                    </li>
                                ))}
                            </LargeListWrapper>
                        </Section>

                        <Section>
                            <SectionTitle>Movies - crew ({actorCrew.length})</SectionTitle>
                            <LargeListWrapper>
                                {actorCrew.slice(0, 12).map((crew) => (
                                    <li key={crew.credit_id}>
                                        <StyledLink to={`/movies/${crew.id}`}>
                                            <ListTileLarge
                                                posterPath={crew.backdrop_path}
                                                title={crew.title}
                                                subtitle={getReleaseYear(crew.release_date) || "No release year available"}
                                                tags={nameGenres(crew.genre_ids)}
                                                voteCount={crew.vote_count}
                                                ratingValue={formatVote(crew.vote_average)}
                                            />
                                        </StyledLink>
                                    </li>
                                ))}
                            </LargeListWrapper>
                        </Section>
                    </Main>
                )
    )
};

export default PersonDetails;