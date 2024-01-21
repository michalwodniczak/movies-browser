import { backdropURL, posterURL } from "./APIURLS";

const getReleaseYear = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.getFullYear();
};

const formatDate = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.toLocaleDateString('pl-PL');
}

const listCounties = (productionCountries) => productionCountries.map(
  country => country.name).join(", ");

const nameGenres = (genreIds, genres) => (
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

const filterOutTv = (credits) => credits.filter(
  ({ media_type }) => media_type !== "tv"
);

export const processMovieData = (movieDetails) => {

  return (
    {
      backdropPath: movieDetails.backdrop_path,
      backdropURL: `${backdropURL}${movieDetails.backdrop_path}`,
      posterPath: movieDetails.poster_path,
      posterURL: `${posterURL}${movieDetails.poster_path}`,
      title: movieDetails.title,
      releaseYear: getReleaseYear(movieDetails.release_date),
      releaseDate: formatDate(movieDetails.release_date),
      production: listCounties(movieDetails.production_countries),
      genres: movieDetails.genres,
      rating: formatVote(movieDetails.vote_average),
      votes: movieDetails.vote_count,
      description: movieDetails.overview,
    }
  )
};

export const processMovieListData = (rawMovieList, rawGenreList) => {
  const movies = rawMovieList.results;
  const genres = rawGenreList.genres;

  return movies.map((movie) => (
    {
      id: movie.id,
      posterPath: movie.poster_path,
      title: movie.title,
      year: getReleaseYear(movie.release_date),
      namedGenres: nameGenres(movie.genre_ids, genres),
      rating: formatVote(movie.vote_average),
      votes: movie.vote_count,
    }
  ));
};

export const processPersonData = (rawDetails) => {

  return (
    {
      posterPath: rawDetails.profile_path,
      name: rawDetails.name,
      birthday: formatDate(rawDetails.birthday),
      birthplace: rawDetails.place_of_birth,
      biography: rawDetails.biography,
    }
  )
};

export const processPersonCreditsData = (rawCredits, rawGenreList) => {
  const castCredits = rawCredits.cast;
  const crewCredits = rawCredits.crew;
  const genres = rawGenreList.genres;

  const cast = filterOutTv(castCredits).map(
    (cast) => (
      {
        id: cast.id,
        posterPath: cast.poster_path,
        title: cast.title,
        year: getReleaseYear(cast.release_date),
        namedGenres: nameGenres(cast.genre_ids, genres),
        rating: formatVote(cast.vote_average),
        votes: cast.vote_count,
        role: cast.character,
        creditID: cast.credit_id,
      }
    )
  );

  const crew = filterOutTv(crewCredits).map(
    (crew) => (
      {
        id: crew.id,
        posterPath: crew.poster_path,
        title: crew.title,
        year: getReleaseYear(crew.release_date),
        namedGenres: nameGenres(crew.genre_ids, genres),
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

export const processSearchResults = (rawSearchResults, rawGenreList, path) => {

  switch (path) {
    case "movies":
      return processMovieListData(rawSearchResults, rawGenreList);
    case "people":
      return rawSearchResults.results;
    default:
      return {};
  };
};