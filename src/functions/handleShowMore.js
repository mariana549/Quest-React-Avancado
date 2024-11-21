import { limitPokemons } from "../utils/constants/constants";

export const handlerShowMore = (setPokemonVisiveis) => {
  setPokemonVisiveis((pokemonsVisiveis) =>
    // esse trecho verifica toda vez que essa função executada se os pokemons Visiveis ja atingiu o limite.
    pokemonsVisiveis !== limitPokemons
      ? pokemonsVisiveis + 10
      : pokemonsVisiveis
  );
};
