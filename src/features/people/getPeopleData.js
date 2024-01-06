// to fetch data from API use below import with passed { page }
// await fetch(`${popularPeopleURL}&page=${page}`);
// import { popularPeopleURL } from "../../utils/API/APIURLS";

const poepleListSampleURL = "https://raw.githubusercontent.com/bedicooper/movies-browser/main/public/people.json";

export const getPeopleData = async (/*page*/) => {

  const response = await fetch(poepleListSampleURL);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};