export const  filteredPokemonsName = (pokemons,pokeNames) => {
   const results = pokemons
      .filter(pokemon => pokeNames.includes(pokemon.name))
      .map(e => e.sprites.other.showdown.front_default);

   return results
}