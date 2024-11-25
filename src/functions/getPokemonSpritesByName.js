export const getPokemonSpritesByName = (pokemons, pokeNames) => {
  const returnImages = pokemons
    .filter(({ name }) => pokeNames.includes(name))
    .map((e) => e.sprites.other.showdown.front_default);

  return returnImages;
};
