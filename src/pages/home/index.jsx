import PropTypes from 'prop-types';
import { PokemonList } from '../../components/pokedex/pokemonList'

export default function Home({setPokemonData}) {
  return (
    <>
      <PokemonList setPokemonData={setPokemonData}  />
    </>
  )
}

Home.propTypes = {
  setPokemonData: PropTypes.any.isRequired
};