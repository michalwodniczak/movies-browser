import {
  URL,
  AuthorizationAndLanguage
} from "./APIURLS";

export const getPeopleDetails = async ({ personId }) => {
  try {
    const response = await fetch(
      `${URL}person/${personId}${AuthorizationAndLanguage}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw { status: 404, message: 'Person not found' };
      } else {
        throw new Error(response.statusText);
      }
    }

    return await response.json();

  } catch (error) {
    throw error;
  };
};

export const getPeopleCredits = async ({ personId }) => {
  try {
    const response = await fetch(
      `${URL}person/${personId}/combined_credits${AuthorizationAndLanguage}`
    );

    if (response.status === 404) {
      throw { status: 404, message: 'Person credits not found' };
    } else if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();

  } catch (error) {
    throw error;
  };
};