import { createContext } from "react";

const PokeContext = createContext({
  pokemons: [],
  setPokemons: () => {},
  loading: true,
  pokemonsList: [],
  initialPokemons: [],
  showButtons: true,
  setShowButtons: () => {},
  pokemonsVisiveis: 12,
  setPokemonsVisiveis: () => {},
});
export default PokeContext;
