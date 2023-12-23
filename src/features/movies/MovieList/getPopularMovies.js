export const getPopularMovies = async () => {
    const response = await fetch("/movies-browser/public/movies.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();
};