import { useContext } from "react";
import Context from "../../contexts/pokeDados/context";
import { Pesquisar } from "./styledSearch";

function PokeSearch() {
   const {pokemons, setPokemon} = useContext(Context)
   const getPokemonsSearch = (name) => {
      const filteredPokemons = pokemons.filter(pokemon =>
         pokemon.name.includes(name.toLowerCase())) 
         name ? setPokemon(filteredPokemons) : setPokemon(pokemons)
   };

   return (
      <form>
         <Pesquisar
            placeholder="Pesquisando...."
            className="pesquisando"
            onChange={e => getPokemonsSearch(e.target.value)}
         />
      </form>
   )
}


export default PokeSearch