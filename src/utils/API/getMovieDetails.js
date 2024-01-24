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
      new Error(response.statusText);
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

    if (!response.ok) {
      new Error(response.statusText);
    }
    return await response.json();

  } catch (error) {
    throw error;
  };
};