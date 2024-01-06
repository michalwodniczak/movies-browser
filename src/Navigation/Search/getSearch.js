import axios from "axios";

export const getSearch = async (query) => {
    
    const apiKey = "f9cdeaf9af4ca30fda858745e2b12712";
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    
    try {
        const response = await axios.get(URL);
        return response.data.results
    } catch {
        throw new Error("Failed to search");
    };
};

//${URL}/search/movie?query=${query}&apiKey=${apiKey}

//  url pod film``

// url pod osobe `https://api.themoviedb.org/3/search/person?query=johnny+depp&api_key=f9cdeaf9af4ca30fda858745e2b12712`