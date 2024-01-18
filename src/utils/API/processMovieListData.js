export const processMovieListData = (rawMovieList, rawGenreList) => {
    const movies = rawMovieList.results;
    const genres = rawGenreList.genres;

    const getReleaseYear = (releaseDate) => {
        const date = new Date(releaseDate);
        return date.getFullYear();
    };
    const nameGenres = (genreIds) => (
        genreIds.map(
            (id) => genres.find(
                (genre) => genre.id == id).name
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

    return movies.map((movie) => (
        {
            id: movie.id,
            posterPath: movie.poster_path,
            title: movie.title,
            year: getReleaseYear(movie.release_date),
            namedGenres: nameGenres(movie.genre_ids),
            rating: formatVote(movie.vote_average),
            votes: movie.vote_count,
        }
    ));
};