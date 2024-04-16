import PropTypes from 'prop-types';
import { GetPokedex } from '../../components/pokedex'

export default function Home({setPokemonData}) {
  return (
    <>
      <GetPokedex setPokemonData={setPokemonData} />
    </>
  )
}

Home.propTypes = {
  setPokemonData: PropTypes.any.isRequired
};