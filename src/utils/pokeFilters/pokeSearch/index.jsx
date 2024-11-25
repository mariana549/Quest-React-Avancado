import { useContext } from "react";
import PokeContext from "../../../contexts/pokeContext/context";
import { Pesquisar } from "./styledSearch.js";

function PokeSearch() {
  const { setPokemons, initialPokemons, setPokemonsVisiveis } =
    useContext(PokeContext);

  const getPokemonsSearch = (name) => {
    if (name === "") {
      setPokemons(initialPokemons);
      setPokemonsVisiveis(12);
    } else {
      const filteredPokemons = initialPokemons.filter(({ name: pokeName }) =>
        pokeName.toLowerCase().includes(name.toLowerCase())
      );

      setPokemons(filteredPokemons);
      setPokemonsVisiveis(12);
    }
  };

  return (
    <form>
      <Pesquisar
        placeholder="Pesquisando..."
        className="pesquisando"
        onChange={(event) => getPokemonsSearch(event.target.value)}
      />
    </form>
  );
}

export default PokeSearch;
