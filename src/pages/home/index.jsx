import axios from "axios";
import { useEffect, useState } from "react";
import { PokeHeader } from "../../components/pokeHeader";
import { PokemonList } from "../../components/pokedex/pokemonList";
import Provider from "../../contexts/pokeDados/Provider";
import { getPokedex, getPokemon } from "../../services/requestApi";

export default function Home() {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonsVisiveis, setPokemonVisiveis] = useState(10);
  const [loading, setLoading] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  const pokemonsList = pokemons.slice(0, pokemonsVisiveis);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // esse trecho faz uma chamada na api de 10 em 10 pokemons, para não sobrecarregar o site.
        const data = await getPokedex(pokemonsVisiveis, 0);

        const namesPokemons = data.map((poke) => poke.name);

        const pokePromises = await namesPokemons.map(
          async (pokeName) => await getPokemon(pokeName)
        );

        const pokeDados = await axios.all(pokePromises);

        setPokemon([...pokeDados]);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching Pokemon API: ${error.message}`);
      }
    };
    fetchPokemon();
  }, [pokemonsVisiveis]);

  return (
    <Provider
      value={{
        pokemons: pokemons,
        loading: loading,
        pokemonsList: pokemonsList,
        showButtons: showButtons,
        pokemonsVisiveis: pokemonsVisiveis,
        setPokemonVisiveis: setPokemonVisiveis,
        setPokemon: setPokemon,
        setShowButtons: setShowButtons,
      }}
    >
      <PokeHeader />
      <PokemonList />
    </Provider>
  );
}
