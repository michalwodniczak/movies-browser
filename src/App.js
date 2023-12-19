import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Navigation from "./Navigation";
import MovieList from "./features/movies/MovieList";
import MovieDetails from "./features/movies/MovieDetails";
import PersonList from "./features/persons/PersonList";
import PersonDetails from "./features/persons/PersonDetails";
import { toMovieList, toMovieDetails, toPersonList, toPersonDetails } from "./routes";

function App() {
  return (
    <HashRouter>

      <Navigation />

      <Switch>
        <Route path={toMovieList()}>
          <MovieList />
        </Route>
        <Route path={toMovieDetails()}>
          <MovieDetails />
        </Route>
        <Route path={toPersonList()}>
          <PersonList />
        </Route>
        <Route path={toPersonDetails()}>
          <PersonDetails />
        </Route>
        <Route path='/'>
          <Redirect to={toMovieList()} />
        </Route>
      </Switch>

    </HashRouter>
  );
}

export default App;
