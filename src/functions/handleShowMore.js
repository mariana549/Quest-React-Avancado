import { limitPokemons } from "../utils/constants/variaveis";

export const handlerShowMore = (setPokemonsVisiveis, setPixels) => {
  setPokemonsVisiveis((pokemonsVisiveis) =>
    pokemonsVisiveis + 12 <= limitPokemons
      ? pokemonsVisiveis + 12
      : limitPokemons
  );

  setPixels(window.scrollY)
};
