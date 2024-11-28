import { useContext } from "react";
import PokeContext from "../../../contexts/pokeContext/pokeContext";
import { Pesquisar } from "./styledSearch.js";

function PokeSearch() {
  const { setPokemons, initialPokemons, setPokemonsVisiveis, setPixels } =
    useContext(PokeContext);

  const getPokemonsSearch = (name) => {
    if (name === "") {
      setPokemons(initialPokemons);
      setPokemonsVisiveis(12);
      setPixels(0);
    } else {
      const filteredPokemons = initialPokemons.filter(({ name: pokeName }) =>
        pokeName.toLowerCase().includes(name.toLowerCase())
      );

      setPokemons(filteredPokemons);
      setPokemonsVisiveis(12);
      setPixels(0);
    }
  };

  return (
    <form>
      <Pesquisar
        placeholder="Search..."
        aria-label="Search pokemon"
        onChange={(event) => getPokemonsSearch(event.target.value)}
      />
    </form>
  );
}

export default PokeSearch;
