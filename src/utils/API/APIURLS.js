export const URL = "https://api.themoviedb.org/3/";
export const apiKey = "f9cdeaf9af4ca30fda858745e2b12712";

export const popularMoviesURL = `${URL}movie/popular?api_key=${apiKey}&language=en-US`;

export const popularPeopleURL = `${URL}person/popular?api_key=${apiKey}&language=en-US`;

export const genresURL = `${URL}genre/movie/list?api_key=${apiKey}&language=en-US`;

export const backdropURL = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";

//tymczasowe linki do kopiowania:
    // link to pierwszej strony popularMovies
        //      https://api.themoviedb.org/3/movie/popular?api_key=f9cdeaf9af4ca30fda858745e2b12712&language=en-US&page=1

    //link to pierwszej strony popularPeople
        //      https://api.themoviedb.org/3/person/popular?api_key=f9cdeaf9af4ca30fda858745e2b12712&language=en-US&page=1

    //początek linku do backdrop image
        //  https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/