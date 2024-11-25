import { PokeHeader } from "../../components/pokeHeader";
import { PokemonList } from "../../components/pokedex/pokemonList";
import { PokeProvider } from "../../contexts/pokeContext/pokeProvider";

export default function Home() {
  return (
    <PokeProvider>
      <PokeHeader />
      <PokemonList />
    </PokeProvider>
  );
}
