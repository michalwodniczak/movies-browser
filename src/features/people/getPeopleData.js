import { popularPeopleURL } from "../../utils/API/APIURLS";

export const getPeopleData = async ( page ) => {

  const response = await fetch(`${popularPeopleURL}&page=${page}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};