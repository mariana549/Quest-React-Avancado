import { useContext } from "react";
import Context from "../../contexts/pokeDados/context";
import { Pesquisar } from "./styledSearch";

function PokeSearch() {
   const {pokemons, setPokemon} = useContext(Context)
   
// Função para buscar Pokémon com base no nome
   const getPokemonsSearch = (name) => {
      if (name) {
         const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.includes(name.toLowerCase())
         );
         setPokemon(filteredPokemons);
      } else {
         setPokemon(pokemons);
      }
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