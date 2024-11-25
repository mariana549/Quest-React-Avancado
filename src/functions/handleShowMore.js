import { limitPokemons } from "../utils/constants/variaveis";

export const handlerShowMore = (setPokemonsVisiveis) => {
  setPokemonsVisiveis((pokemonsVisiveis) =>
    pokemonsVisiveis + 12 <= limitPokemons
      ? pokemonsVisiveis + 12
      : limitPokemons
  );
};
