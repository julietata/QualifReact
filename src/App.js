import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import FavouritesPokemon from './components/FavouritesPokemon';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import SearchPokemon from './components/SearchPokemon';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemons">
          <PokemonList/>
        </Route>
        <Route path="/pokemon/:name">
          <SearchPokemon/>
        </Route>
        <Route path="/detail/:detail">
          <PokemonDetail/>
        </Route>
        <Route path="/favourites">
          <FavouritesPokemon/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
