import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navigation from "./Navigation";
import { Main } from './common/Main/Main';
import MovieList from "./features/movies/MovieList";
import MovieDetails from "./features/movies/MovieDetails";
import PeopleList from "./features/people/PeopleList";
import PeopleDetails from "./features/people/PeopleDetails";
import { toMovieList, toMovieDetails, toPeopleList, toPeopleDetails } from "./routes";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toMovieDetails()}>
            <MovieDetails />
          </Route>
          <Route path={toMovieList()}>
            <MovieList />
          </Route>
          <Route path={toPeopleDetails()}>
            <PeopleDetails />
          </Route>
          <Route path={toPeopleList()}>
            <PeopleList />
          </Route>
          <Route path='/'>
            <Redirect to={toMovieList()} />
          </Route>
        </Switch>
      </Main>
    </HashRouter>

  );
};

export default App;
