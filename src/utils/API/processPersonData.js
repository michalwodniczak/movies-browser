export const processPersonData = (rawDetails) => {
    const date = new Date(rawDetails.birthday);
    const formattedDate = date.toLocaleDateString('pl-PL');

    return (
        {
            posterPath: rawDetails.profile_path,
            name: rawDetails.name,
            birthday: formattedDate,
            birthplace: rawDetails.place_of_birth,
            biography: rawDetails.biography,
        }
    )
};

export const processPersonCreditsData = (rawCredits, rawGenreList) => {
    const castCredits = rawCredits.cast;
    const crewCredits = rawCredits.crew;
    const genres = rawGenreList.genres;

    const getReleaseYear = (releaseDate) => {
        const date = new Date(releaseDate);
        return date.getFullYear();
    };

    console.log(rawGenreList.genres.map((genre) => genre.name));
    console.log(castCredits.slice(0, 12).map((movie) => movie.genre_ids));

    const nameGenres = (genreIds) => (
        genreIds.map(
            (id) => genres.find(
                (genre) => genre.id === id).name
        )
    );
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

    const cast = castCredits.filter(
            ({ media_type }) => media_type != "tv"
        ).map(
            (cast) => (
            {
                id: cast.id,
                posterPath: cast.poster_path,
                title: cast.title,
                year: getReleaseYear(cast.release_date),
                namedGenres: nameGenres(cast.genre_ids),
                rating: formatVote(cast.vote_average),
                votes: cast.vote_count,
                role: cast.character,
                creditID: cast.credit_id,
            }
        )
    );

    const crew = crewCredits.filter(
            ({ media_type }) => media_type != "tv"
        ).map(
            (crew) => (
            {
                id: crew.id,
                posterPath: crew.poster_path,
                title: crew.title,
                year: getReleaseYear(crew.release_date),
                namedGenres: nameGenres(crew.genre_ids),
                rating: formatVote(crew.vote_average),
                votes: crew.vote_count,
                role: crew.job,
                creditID: crew.credit_id,
            }
        )
    );

    return (
        {
            cast: cast,
            crew: crew,
        }
    );
};