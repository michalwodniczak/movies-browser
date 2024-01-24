import {
  popularMoviesURL
} from "./APIURLS";

export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(
      `${popularMoviesURL}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();

  } catch (error) {
    throw error;
  }
};
