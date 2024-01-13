import { backdropURL, posterURL } from "../../utils/API/APIURLS";

export const customiseMovieDetails = (movieDetails) => {
    const date = new Date(movieDetails.release_date);
    const justYear = date.getFullYear();
    const formattedDate = date.toLocaleDateString('pl-PL');;
    const productionCountries = movieDetails.production_countries.map(
        country => country.name).join(", ");

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
        {
            backdropPath: movieDetails.backdrop_path,
            backdropURL: `${backdropURL}${movieDetails.backdrop_path}`,
            posterPath: movieDetails.poster_path,
            posterURL: `${posterURL}${movieDetails.poster_path}`,
            title: movieDetails.original_title,
            releaseYear: justYear,
            releaseDate: formattedDate,
            production: productionCountries,
            genres: movieDetails.genres,
            rating: formatVote(movieDetails.vote_average),
            votes: movieDetails.vote_count,
            description: movieDetails.overview,
        }
    )
};