import { popularPeopleURL } from "./APIURLS";

export const getPopularPeople = async ( page ) => {

  const response = await fetch(`${popularPeopleURL}&page=${page}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};