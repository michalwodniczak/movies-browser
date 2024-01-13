import { URL, apiKey } from "../../../utils/API/APIURLS";
import { AuthorizationAndLanguage } from "../../../utils/API/APIURLS";

export const getPeopleDetails = async ({ personId }) => {
    try {
        const response = await fetch(`${URL}/person/${personId}?api_key=${apiKey}&language=en-US`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw error;
    }
};

export const getPeopleCredits = async ({ personId }) => {

    const response = await fetch(`${URL}person/${personId}/combined_credits${AuthorizationAndLanguage}`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};