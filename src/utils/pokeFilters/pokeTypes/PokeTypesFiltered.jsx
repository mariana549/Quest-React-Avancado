import { useContext } from "react";
import PokeContext from "../../../contexts/pokeContext/context";
import { Option, SelectTypes } from "./styledTypes.js";

function PokeTypesFiltered() {
  const { setPokemons, initialPokemons, setPokemonsVisiveis } =
    useContext(PokeContext);

  const getPokemonsTypes = (typeName) => {
    if (typeName === "") {
      setPokemons(initialPokemons);
      setPokemonsVisiveis(12);
    } else {
      const filteredPokemons = initialPokemons.filter(({ types }) =>
        types.some(({ type: { name } }) => name === typeName)
      );

      setPokemons(filteredPokemons);
      setPokemonsVisiveis(12);
    }
  };

  return (
    <SelectTypes onChange={(event) => getPokemonsTypes(event.target.value)}>
      <Option value="">- All -</Option>
      <Option value="bug">Bug</Option>
      <Option value="dark">Dark</Option>
      <Option value="dragon">Dragon</Option>
      <Option value="electric">Electric</Option>
      <Option value="fairy">Fairy</Option>
      <Option value="fighting">Fighting</Option>
      <Option value="fire">Fire</Option>
      <Option value="flying">Flying</Option>
      <Option value="ghost">Ghost</Option>
      <Option value="ground">Ground</Option>
      <Option value="ice">Ice</Option>
      <Option value="normal">Normal</Option>
      <Option value="poison">Poison</Option>
      <Option value="psychic">Psychic</Option>
      <Option value="rock">Rock</Option>
      <Option value="steel">Steel</Option>
      <Option value="water">Water</Option>
      <Option value="grass">Grass</Option>
    </SelectTypes>
  );
}

export default PokeTypesFiltered;
