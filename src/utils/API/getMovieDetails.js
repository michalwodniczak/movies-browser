import {
  URL,
  AuthorizationAndLanguage
} from "./APIURLS";

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${URL}movie/${id}${AuthorizationAndLanguage}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw { status: 404, message: 'Movie not found' };
      } else {
        throw new Error(response.statusText);
      }
    }

    return await response.json();

  } catch (error) {
    throw error;
  };
};

export const getMovieCredits = async (id) => {
  try {
    const response = await fetch(
      `${URL}movie/${id}/credits${AuthorizationAndLanguage}`
    );

    if (response.status === 404) {
      throw { status: 404, message: 'Movie credits not found' };
    } else if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();

  } catch (error) {
    throw error;
  };
};