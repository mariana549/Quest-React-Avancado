import { useContext } from "react";
import Context from "../../contexts/pokeDados/context";
import { Pesquisar } from "./styledSearch";
import { getPokedex, getPokemon } from "../requestApi";
import axios from "axios";
import { limitPokemons } from "../../utils/constants/constants";

function PokeSearch() {
   const { pokemons, setPokemon, setShowButtons } = useContext(Context)

   // Esse trecho faz uma requisição na api para poder filtrar os pokemons por nome, essa requisição não interfere na requisição outra requisição na pasta pokemonsList.
   const getPokemonsSearch = async (name) => {
      const data = await getPokedex(limitPokemons, 0);
      const namesPokemons = data.map(poke => poke.name)

      const filteredPokemons = namesPokemons.filter((pokeName) => pokeName.includes(name.toLowerCase()))

      const pokePromises = await filteredPokemons.map(async (pokeName) => await getPokemon(pokeName))

      const pokeDados = await axios.all(pokePromises)

      // Se o nome não estiver vazio, exiba os Pokémon filtrados; caso contrário, mostre todos os Pokémon
      setPokemon(name !== "" ? pokeDados : pokemons)
      setShowButtons(false)
   };

   return (
      <form>
         <Pesquisar
            placeholder="Pesquisando...."
            className="pesquisando"
            onChange={event => getPokemonsSearch(event.target.value)}
         />
      </form>
   )
}


export default PokeSearch