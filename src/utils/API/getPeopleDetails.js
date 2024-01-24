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
      throw new Error(response.statusText);
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

    if (!response.ok) {
      new Error(response.statusText);
    }
    return await response.json();

  } catch (error) {
    throw error;
  };
};