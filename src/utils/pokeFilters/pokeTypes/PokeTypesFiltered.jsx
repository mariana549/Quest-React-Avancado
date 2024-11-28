import { useContext } from "react";
import PokeContext from "../../../contexts/pokeContext/pokeContext";
import { Option, SelectTypes } from "./styledTypes.js";

function PokeTypesFiltered() {
  const { setPokemons, initialPokemons, setPokemonsVisiveis, setPixels } =
    useContext(PokeContext);

  const getPokemonsTypes = (typeName) => {
    if (typeName === "") {
      setPokemons(initialPokemons);
      setPokemonsVisiveis(12);
      setPixels(0);
    } else {
      const filteredPokemons = initialPokemons.filter(({ types }) =>
        types.some(({ type: { name } }) => name === typeName)
      );

      setPokemons(filteredPokemons);
      setPokemonsVisiveis(12);
      setPixels(0);
    }
  };

  return (
    <SelectTypes
      onChange={(event) => getPokemonsTypes(event.target.value)}
      aria-label="Filter Pokémon by type"
    >
      <Option value="" aria-label="all types">
        - All -
      </Option>
      <Option value="bug" aria-label="type bug">
        Bug
      </Option>
      <Option value="dark" aria-label="type dark">
        Dark
      </Option>
      <Option value="dragon" aria-label="type dragon">
        Dragon
      </Option>
      <Option value="electric" aria-label="type electric">
        Electric
      </Option>
      <Option value="fairy" aria-label="type fairy">
        Fairy
      </Option>
      <Option value="fighting" aria-label="type fighting">
        Fighting
      </Option>
      <Option value="fire" aria-label="type fire">
        Fire
      </Option>
      <Option value="flying" aria-label="type flying">
        Flying
      </Option>
      <Option value="ghost" aria-label="type ghost">
        Ghost
      </Option>
      <Option value="ground" aria-label="type ground">
        Ground
      </Option>
      <Option value="ice" aria-label="type ice">
        Ice
      </Option>
      <Option value="normal" aria-label="type normal">
        Normal
      </Option>
      <Option value="poison" aria-label="type poison">
        Poison
      </Option>
      <Option value="psychic" aria-label="type psychic">
        Psychic
      </Option>
      <Option value="rock" aria-label="type rock">
        Rock
      </Option>
      <Option value="steel" aria-label="type steel">
        Steel
      </Option>
      <Option value="water" aria-label="type water">
        Water
      </Option>
      <Option value="grass" aria-label="type grass">
        Grass
      </Option>
    </SelectTypes>
  );
}

export default PokeTypesFiltered;
