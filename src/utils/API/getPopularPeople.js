import {
  popularPeopleURL
} from "./APIURLS";

export const getPopularPeople = async (page) => {
  try {
    const response = await fetch(
      `${popularPeopleURL}&page=${page}`
    );

    if (!response.ok) {
      new Error(response.statusText);
    }
    return await response.json();

  } catch (error) {
    throw error;
  };
};