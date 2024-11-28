import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPokedex } from "../../services/requestApi/getPokedex";
import { getPokemon } from "../../services/requestApi/getPokemon";
import { limitPokemons } from "../../utils/constants/variaveis";
import PokeContext from "./pokeContext";

export const PokeProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [initialPokemons, setInitialPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonsVisiveis, setPokemonsVisiveis] = useState(12);
  const [showButtons, setShowButtons] = useState(true);
  const [pixels ,setPixels] = useState(0);
  const pokemonsList = pokemons.slice(0, pokemonsVisiveis);

  useEffect(() => {
    const fetchInitialPokemons = async () => {
      try {
        const data = await getPokedex(limitPokemons, 0);
        const namesPokemons = data.map((poke) => poke.name);
        const pokePromises = namesPokemons.map(
          async (pokeName) => await getPokemon(pokeName)
        );
        const pokeDados = await axios.all(pokePromises);

        setInitialPokemons(pokeDados);
        setPokemons(pokeDados);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching Pokémon: ${error.message}`);
      }
    };
    fetchInitialPokemons();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        setPokemons,
        loading,
        pokemonsList,
        initialPokemons,
        showButtons,
        setShowButtons,
        pokemonsVisiveis,
        setPokemonsVisiveis,
        pixels,
        setPixels,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

PokeProvider.propTypes = { children: PropTypes.node.isRequired };
