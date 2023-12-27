export const URL = "https://api.themoviedb.org/3/";
export const URLImages = "https://image.tmdb.org/t/p/";

export const apiKey = "f9cdeaf9af4ca30fda858745e2b12712";

export const AuthorizationAndLanguage = `?api_key=${apiKey}&language=en-US`;

export const popularMoviesURL = `${URL}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const popularPeopleURL = `${URL}person/popular?api_key=${apiKey}&language=en-US&page=1`;

export const genresURL = `${URL}genre/movie/list?api_key=${apiKey}&language=en-US`;



export const backdropURL = `${URLImages}w1920_and_h800_multi_faces`;
export const posterURL = `${URLImages}w300_and_h450_bestv2`

//tymczasowe linki do kopiowania:
    // link to pierwszej strony popularMovies
        //      https://api.themoviedb.org/3/movie/popular?api_key=f9cdeaf9af4ca30fda858745e2b12712&language=en-US&page=1

    //link to pierwszej strony popularPeople
        //      https://api.themoviedb.org/3/person/popular?api_key=f9cdeaf9af4ca30fda858745e2b12712&language=en-US&page=1

    //początek linku do backdrop image
        //  https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/

    //link do movie po id
        //  https://api.themoviedb.org/3/movie/466420?api_key=f9cdeaf9af4ca30fda858745e2b12712&language=en-US

        
    //link do movie cast and crew po id
        //  https://api.themoviedb.org/3/movie/466420/credits?api_key=f9cdeaf9af4ca30fda858745e2b12712&language=en-US