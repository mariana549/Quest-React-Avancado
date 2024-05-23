import { useContext } from "react"
import Context from "../../contexts/pokeDados/context"
import { Option, SelectTypes } from "./styledTypes"

function PokeTypesFiltered() {
   const { pokemons, setPokemon } = useContext(Context)

   const getPokemonsTypes = (type) => {
      const filteredPokemons = pokemons.filter(pokemon =>
         pokemon.types.map(e => e.type.name).includes(type))
      type ? setPokemon(filteredPokemons) : setPokemon(pokemons)
   }

   return (
      <SelectTypes value="types" onChange={e => getPokemonsTypes(e.target.value)}>
         <Option value="" />
         <Option value="bug">bug </Option>
         <Option value="dark">dark </Option>
         <Option value="dragon">dragon </Option>
         <Option value="electric">electric </Option>
         <Option value="fairy">fairy </Option>
         <Option value="fighting">fighting </Option>
         <Option value="fire">fire </Option>
         <Option value="flying">flying </Option>
         <Option value="ghost">ghost </Option>
         <Option value="ground">ground </Option>
         <Option value="ice">ice </Option>
         <Option value="normal">normal </Option>
         <Option value="poison">poison </Option>
         <Option value="psychic">psychic &nbsp;&nbsp;</Option>
         <Option value="rock">rock </Option>
         <Option value="steel">steel </Option>
         <Option value="water">water </Option>
      </SelectTypes>

   )
}

export default PokeTypesFiltered
