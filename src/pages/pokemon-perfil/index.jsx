import PropTypes from 'prop-types';
import { Pokemon } from '../../components/Pokemon';
import { NavBar } from '../../components/pokeHeader';

export const Perfil = ({ pokemonData }) => {
  console.log(pokemonData, "perfil")
  return (
    <>
      <NavBar />
      <Pokemon pokemonData={pokemonData}/>
    </>
  )
} 

Perfil.defaultProps = {
  pokemonData: {} 
};

Perfil.propTypes = {
  pokemonData: PropTypes.any.isRequired
}