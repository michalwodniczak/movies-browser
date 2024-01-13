import { backdropURL, posterURL } from "../../utils/API/APIURLS";

export const customiseMovieDetails = (movieDetails) => {
    const date = new Date(movieDetails.release_date);
    const justYear = date.getFullYear();
    const formattedDate = date.toLocaleDateString('pl-PL');;
    const productionCountries = movieDetails.production_countries.map(
        country => country.name).join(", ");
    const formatedVote = movieDetails.vote_average.toLocaleString(
        'pl-PL',
        {
            maximumFractionDigits: 1,
        });

    return (
        {
            backdropPath: movieDetails.backdrop_path,
            backdropURL: `${backdropURL}${movieDetails.backdrop_path}`,
            posterPath: movieDetails.poster_path,
            posterURL: `${posterURL}${movieDetails.poster_path}`,
            title: movieDetails.title,
            releaseYear: justYear,
            releaseDate: formattedDate,
            production: productionCountries,
            genres: movieDetails.genres,
            rating: formatedVote,
            votes: movieDetails.vote_count,
            description: movieDetails.overview,
        }
    )
};