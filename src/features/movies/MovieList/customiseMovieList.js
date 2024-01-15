export const customiseMovieList = (movieList, genreList) => {
    const movies = movieList.results;
    const genres = genreList.genres;

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
    const formatVote = (vote) => vote.toLocaleString(
        'pl-PL',
        {
            maximumFractionDigits: 1,
        }
    );

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